/**
 * A module that can tell or yell any text.
 */

module.exports = {
	tell: function(text) {
		console.log('Telling: ' + text.toLowerCase());
	},

	yell: function(text) {
		console.log('Yelling: ' + text.toUpperCase());
	}
}