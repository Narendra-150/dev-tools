'use strict';
const { log } = require('../../../helpers/log_helper');
const process = require('./logic/process');

module.exports = (services) => {
	return (req, res, next) => {
		res.setTimeout(1800000, function () {
			console.log('Request has timed out.');
			res.send(408);
		});
		let ipPrams = req.body || {};

		return process(services, ipPrams)
		.then(_=>{
			return res.status(200).send(`${_} is difference from ${ipPrams.fromDate}-${ipPrams.toDate}`);
		})
			.catch(next);
	};
};
