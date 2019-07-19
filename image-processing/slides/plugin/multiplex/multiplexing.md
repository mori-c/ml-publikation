## Multiplexing

The multiplex plugin allows your audience to view the slides of the presentation you are controlling on their own phone, tablet or laptop. As the master presentation navigates the slides, all client presentations will update in real time. See a demo at [http://revealjs-51546.onmodulus.net/](http://revealjs-51546.onmodulus.net/).

The multiplex plugin needs the following 3 things to operate:

1. Master presentation that has control
2. Client presentations that follow the master
3. Socket.io server to broadcast events from the master to the clients

More details:

#### Master presentation
Served from a static file server accessible (preferably) only to the presenter. This need only be on your (the presenter's) computer. (It's safer to run the master presentation from your own computer, so if the venue's Internet goes down it doesn't stop the show.) An example would be to execute the following commands in the directory of your master presentation: 

1. ```npm install node-static```
2. ```static```

If you want to use the speaker notes plugin with your master presentation then make sure you have the speaker notes plugin configured correctly along with the configuration shown below, then execute ```node plugin/notes-server``` in the directory of your master presentation. The configuration below will cause it to connect to the socket.io server as a master, as well as launch your speaker-notes/static-file server.

You can then access your master presentation at ```http://localhost:1947```

Example configuration:
```javascript
Reveal.initialize({
// other options...

multiplex: {
// Example values. To generate your own, see the socket.io server instructions.
secret: '13652805320794272084', // Obtained from the socket.io server. Gives this (the master) control of the presentation
id: '1ea875674b17ca76', // Obtained from socket.io server
url: 'revealjs-51546.onmodulus.net:80' // Location of socket.io server
},

// Don't forget to add the dependencies
dependencies: [
{ src: '//cdn.socket.io/socket.io-1.3.5.js', async: true },
{ src: 'plugin/multiplex/master.js', async: true },

// and if you want speaker notes
{ src: 'plugin/notes-server/client.js', async: true }

// other dependencies...
]
});
```

#### Client presentation
Served from a publicly accessible static file server. Examples include: GitHub Pages, Amazon S3, Dreamhost, Akamai, etc. The more reliable, the better. Your audience can then access the client presentation via ```http://example.com/path/to/presentation/client/index.html```, with the configuration below causing them to connect to the socket.io server as clients.

Example configuration:
```javascript
Reveal.initialize({
// other options...

multiplex: {
// Example values. To generate your own, see the socket.io server instructions.
secret: null, // null so the clients do not have control of the master presentation
id: '1ea875674b17ca76', // id, obtained from socket.io server
url: 'revealjs-51546.onmodulus.net:80' // Location of socket.io server
},

// Don't forget to add the dependencies
dependencies: [
{ src: '//cdn.socket.io/socket.io-1.3.5.js', async: true },
{ src: 'plugin/multiplex/client.js', async: true }

// other dependencies...
]
});
```

#### Socket.io server
Server that receives the slideChanged events from the master presentation and broadcasts them out to the connected client presentations. This needs to be publicly accessible. You can run your own socket.io server with the commands:

1. ```npm install```
2. ```node plugin/multiplex```

Or you use the socket.io server at [http://revealjs-51546.onmodulus.net/](http://revealjs-51546.onmodulus.net/).

You'll need to generate a unique secret and token pair for your master and client presentations. To do so, visit ```http://example.com/token```, where ```http://example.com``` is the location of your socket.io server. Or if you're going to use the socket.io server at [http://revealjs-51546.onmodulus.net/](http://revealjs-51546.onmodulus.net/), visit [http://revealjs-51546.onmodulus.net/token](http://revealjs-51546.onmodulus.net/token).

You are very welcome to point your presentations at the Socket.io server running at [http://revealjs-51546.onmodulus.net/](http://revealjs-51546.onmodulus.net/), but availability and stability are not guaranteed. For anything mission critical I recommend you run your own server. It is simple to deploy to nodejitsu, heroku, your own environment, etc.

##### socket.io server as file static server

The socket.io server can play the role of static file server for your client presentation, as in the example at [http://revealjs-51546.onmodulus.net/](http://revealjs-51546.onmodulus.net/). (Open [http://revealjs-51546.onmodulus.net/](http://revealjs-51546.onmodulus.net/) in two browsers. Navigate through the slides on one, and the other will update to match.)

Example configuration:
```javascript
Reveal.initialize({
// other options...

multiplex: {
// Example values. To generate your own, see the socket.io server instructions.
secret: null, // null so the clients do not have control of the master presentation
id: '1ea875674b17ca76', // id, obtained from socket.io server
url: 'example.com:80' // Location of your socket.io server
},

// Don't forget to add the dependencies
dependencies: [
{ src: '//cdn.socket.io/socket.io-1.3.5.js', async: true },
{ src: 'plugin/multiplex/client.js', async: true }

// other dependencies...
]
```

It can also play the role of static file server for your master presentation and client presentations at the same time (as long as you don't want to use speaker notes). (Open [http://revealjs-51546.onmodulus.net/](http://revealjs-51546.onmodulus.net/) in two browsers. Navigate through the slides on one, and the other will update to match. Navigate through the slides on the second, and the first will update to match.) This is probably not desirable, because you don't want your audience to mess with your slides while you're presenting. ;)

Example configuration:
```javascript
Reveal.initialize({
// other options...

multiplex: {
// Example values. To generate your own, see the socket.io server instructions.
secret: '13652805320794272084', // Obtained from the socket.io server. Gives this (the master) control of the presentation
id: '1ea875674b17ca76', // Obtained from socket.io server
url: 'example.com:80' // Location of your socket.io server
},

// Don't forget to add the dependencies
dependencies: [
{ src: '//cdn.socket.io/socket.io-1.3.5.js', async: true },
{ src: 'plugin/multiplex/master.js', async: true },
{ src: 'plugin/multiplex/client.js', async: true }

// other dependencies...
]
});
```