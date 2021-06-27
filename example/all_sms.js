var SimCom = require('../').SimCom,
	pdu = require('pdu');

var simcom = new SimCom('/dev/ttyAMA0');
simcom.on('open', function() {
	this.listSMS(4).then(function(res) {
		console.log(res);
	})
	.done(function() {
		simcom.close();
	});
});
