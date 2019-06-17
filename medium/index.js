// index.js
// ...
app.post( '/gh-deploy-server-receive-webhook-api-callback', function ( req, res ) {
  var result = receiver.inspect( req.body )

  if ( result.shouldPublish ) {
    publisher.publish( result.payload )
  }

  res.send( 'callback!' )
} )
// ...