var Client                = require('castv2-client').Client,
    //var DefaultMediaReceiver  = require('castv2-client').DefaultMediaReceiver;
    AutocasterReceiver = require('./src/autocaster-receiver'),
    mdns                  = require('mdns');

var browser = mdns.createBrowser(mdns.tcp('googlecast'));

browser.on('serviceUp', function(service) {
  console.log('found device "%s" at %s:%d', service.name, service.addresses[0], service.port);
  ondeviceup(service.addresses[0]);
  browser.stop();
});

browser.start();

function ondeviceup(host) {

  var client = new Client();

  client.connect(host, function() {
    console.log('connected, launching app ...');

    client.launch(AutocasterReceiver, function(err, player) {
        if(err){
            console.log(err);
        }
        //console.log(player);
    });

  });

  client.on('error', function(err) {
    console.log('Error: %s', err.message);
    client.close();
  });

}
