const { log } = require("../../../../helpers/log_helper");

`use strict`;

let parseDate = (str) => {
	var mdy = str.split('/');
	return new Date(mdy[2], mdy[0] - 1, mdy[1]);
}

let datediff = (first, second) => {
	// Take the difference between the dates and divide by milliseconds per day.
	// Round to nearest whole number to deal with DST.
	return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

module.exports = (services, context) => {
	let fromDate = parseDate(context.fromDate);
	let toDate = parseDate(context.toDate);

	return Promise.resolve()
		.then(_ => datediff(fromDate, toDate));

};
