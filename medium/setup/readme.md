ref: [GitHub webhook guide](https://developer.github.com/webhooks/), [Medium API
doc](https://github.com/Medium/medium-api-docs), [Medium node
SDK](https://github.com/Medium/medium-sdk-nodejs), [Webhook
server](https://github.com/davidjuin0519/webhook)

For the past month, I have been using GitHub issue tracker to take note on what
I learn every day. But what if I want to post these notes on Medium?

#### Use GitHub webhook + Medium SDK

Of course we don’t need to copy-and-paste every post. We can use **Github
webhook** and **Medium SDK** to achieve this goal.

There are a few steps:

1.  Deploy a server to receive the webhook
1.  On the Github repo, setup GitHub repo’s web-hook
1.  On the server, extract the data from the webhook and post via Medium SDK

Let’s do it step by step.

#### 1. Deploy a server to receive the webhook

First, we need to make a very tiny server and open an endpoint
github_api_callback:

    // Create tiny server to receive github webhook

    // Node.js Express body-parser middleware
    // parses incoming requests as handler for req.body property or user-controlled object property and value inputs. needs validation to trust 
    // init & return requests in json of 'Content-Type' as type-options  -  https://is.gd/2UJRBC

    // Use Node Express
    var express = require('express')
    // get server http requests from Node Express content parsing handler
    var bodyParser = require('body-parser')
    
    var app = express()

    // parse JSON with content-type (options[inflate, limit, reviver, strict, type, verify])
    app.use(bodyParser.json());
    
    // bodyParser.json(/, http.createServer())
    app.get('/', function (req, res) {
      res.send('Hello World!')
    })

    // bodyParser.json(run github_api_callback code)
    app.post('/github_api_callback', function (req, res) {
      // do something
      res.send('callback!')
    })

    // bodyParser.json(display 'callback' content in 3000)
    app.listen(3000, function () {
      console.log('Webhook server is listening on port 3000!');
    })
    

#### 2. Set up GitHub repo’s webhook

For example: we have a GitHub repo **til**. Navigate to **Settings** tab, select
**Webhooks** on the sidebar, and click **Add webhook**:

![](https://cdn-images-1.medium.com/max/640/0*P-OheA8w0Gtw0LRR.png)

Here **Payload URL** is where we need to put the the webhook url, which is the
endpoint /github_callback_api we created in step 1. Next, select event
**issues** since we need to gather issue tracker’s event.

#### 3–1. Extract data from the webhook

Every action we do on an issue will trigger the webhook. Eventually we will
receive a lot of events and data. In what condition should we post to Medium? I
use 2 conditions.

1.  When the action is labeled, which occurs when I label any tag on an issue.
2.  When the issue has the label published.

This means: it should be posted on Medium if an issue is labeled with tag
“published.” Let’s take a look on the implementation:

    // GitHub_receiver
    module.exports = {
      inspect: function(payload) {
        var labeled = (payload.action == 'labeled')
        var published = (payload.issue.labels.findIndex(function(label) {
                          return label.name == 'Published'
                        }) != -1)
        return (labeled && published) ? 
                {
                  shouldPublish: true,
                  payload: {
                    title: payload.issue.title,
                    body: payload.issue.body
                  }
                } : { shouldPublish: false }
      }
    }

#### 3–2. Post via Medium SDK

Finally, we need to post on Medium. To achieve this, we need to get the access
token first. Just navigate to the **setting** page to get the token.

Next, install medium SDK. Then we can post to Medium without pain! Let’s see
what is going on:

    // medium_publisher
    var medium = require('medium-sdk')
    module.exports = {
      publish: function(payload) {
        var client = new medium.MediumClient({
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET
        })
        client.setAccessToken(process.env.ACCESS_TOKEN)
        client.getUser(function (err, user) {
          client.createPost({
            userId: user.id,
            title: payload.title,
            contentFormat: medium.PostContentFormat.MARKDOWN,
            content: payload.body,
            publishStatus: medium.PostPublishStatus.DRAFT
          }, function (err, post) {
            if (err) {
              console.log(err)
            }
          })
        })
      }
    }

Here is the final webhook server:

    // index.js
    // ...
    app.post('/github_api_callback', function (req, res) {
      var result = receiver.inspect(req.body)
      if (result.shouldPublish) {
        publisher.publish(result.payload)
      }
      res.send('callback!')
    })
    // ...

Resources:

[Use GitHub webhook & Medium SDK](https://medium.com/@juinc/how-to-publish-a-medium-post-via-github-issue-tracker-ea92fa8efc2f)
[Github Webhook Guide](https://developer.github.com/webhooks/)
[Medium API](https://github.com/Medium/medium-api-docs) Documentation
[Medium SDK](https://github.com/Medium/medium-sdk-nodejs): Node.js
[Webhook Server](https://github.com/juinc/webhook)
