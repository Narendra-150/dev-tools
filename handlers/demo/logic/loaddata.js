const data = require('../data/data.json');
const delayFunction = ms => new Promise(res => setTimeout(res, ms));

module.exports = async (context) => {
	let delay = await delayFunction(context.delay*1000);
	return Promise.resolve(data);
};
