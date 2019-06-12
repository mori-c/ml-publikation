// Create tiny server to receive github webhook

// Node.js Express body-parser middleware
// parses incoming requests as handler for req.body property or user-controlled object property and value inputs. needs validation to trust 
// init & return requests in json of 'Content-Type' as type-options  -  https://is.gd/2UJRBC


// Use Node Express
var express = require( 'express' )
// get server http requests from Node Express content parsing handler
var bodyParser = require( 'body-parser' )

var app = express()

// parse JSON with content-type (options[inflate, limit, reviver, strict, type, verify])
app.use( bodyParser.json() );

// bodyParser.json(/, http.createServer())
app.get( '/', function ( req, res ) {
  res.send( 'Hello World!' )
} )
// bodyParser.json(run github_api_callback code)
app.post( 'https://github.com/mori-c/publications/blob/master/medium/setup/github-api-hook-receiver-events-issues.js', function ( req, res ) {
  // do something
  res.send( 'callback!' )
} )

// bodyParser.json(display 'callback' content in 3000)
app.listen( 3000, function () {
  console.log( 'Webhook server is listening on port 3000!' );
} )