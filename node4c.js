/**
 * Example of asynchronous processing using native callback functions
 */

var fs = require('fs');

// List of files to be read.
var file1 = 'node1.js';
var file2 = 'node2.js';

var readFile1 = function(callback) {
	// Read each file and print the number of characters in it.
	fs.readFile(file1, {
		encoding: 'utf8'
	}, function(error, contents) {
		if (error) {
			console.error(error);
		}
		console.log(file1 + ' has ' + contents.length + ' characters.');
		callback();
	});
};

readFile1(function() {
	fs.readFile(file2, {
		encoding: 'utf8'
	}, function(error, contents) {
		if (error) {
			console.error(error);
		}
		console.log(file2 + ' has ' + contents.length + ' characters.');
	});
});