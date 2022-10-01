'use strict';

const fs = require('fs');
const path = require('path');
const executeProcess = require('./executeprocess');
const { log } = require('../../../helpers/log_helper');

module.exports = (services, ipPrams) => {
log ("🚀 => 🚀  file: process.js => 🚀  line 8 => 🚀  ipPrams", ipPrams)

	let context = {
		user: 'DevToolsApp',
		client: 'DevTools',
		delay: ipPrams.delay || 1
	};

	return executeProcess(services, context)
		.then((_) => {
			return Promise.resolve("Success...");
		})
		.catch((err) => {
			throw err;
		});
};
