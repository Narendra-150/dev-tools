const log = (string, data) => (console.log(string, data || ''), data || string);

module.exports = { log }