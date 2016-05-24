/**
 * Example of asynchronous processing
 */

var fs = require('fs');

// List of files to be read.
var files = [
	'node1',
	'node2',
	'node3',
	'node4',
];

for (var i = 0; i < files.length; i++) {

	var file = files[i] + '.js';

	console.log('Started reading: ' + file);

	// Read each file and print the number of characters in it.
	fs.readFile(file, {
		encoding: 'utf8'
	}, function(error, contents) {
		if (error) {
			console.error(error);
		}
		console.log(file + ' has ' + contents.length + ' characters.');
	});

	console.log('End of file: ' + file);
}