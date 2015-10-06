var Application = require('castv2-client').Application,
    util = require('util');

function AutocasterReceiver(client, session) {
  Application.apply(this, arguments);
}


//AutocasterReceiver.APP_ID = 'D67DC17A';
AutocasterReceiver.APP_ID = '6F16BEC7';

util.inherits(AutocasterReceiver, Application);

module.exports = AutocasterReceiver;
