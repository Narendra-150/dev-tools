`use strict`;
const loaddata = require('./loaddata');
const generatedata = require('./generatedata');


let dataLoadProcess = (services, context) => {

	let _loaddata = () => loaddata(context);
	let _generatedata = (data) => generatedata(data, context);

	return _loaddata()
		.then(_generatedata)
		.catch((err) => Promise.reject(err));
};

module.exports = (services, context) => {
	return dataLoadProcess(services, context);
};
