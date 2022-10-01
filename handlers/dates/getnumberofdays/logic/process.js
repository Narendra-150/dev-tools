'use strict';

const fs = require('fs');
const path = require('path');
const executeProcess = require('./executeprocess');
const { log } = require('../../../../helpers/log_helper');

module.exports = (services, ipPrams) => {

	let context = {
		user: 'DevToolsApp',
		client: 'DevTools',
		fromDate: ipPrams.fromDate,
		toDate: ipPrams.toDate
	};

	return executeProcess(services, context)
		.then(log)
		.catch((err) => {
			throw err;
		});
};
