/**
 * Example of synchronous processing
 */

var fs = require('fs');
var async = require('async');

var files = [
	'node1',
	'node2',
	'node3',
	'node4',
];

console.log('Started processing!');

async.eachSeries(files, function(file, callback) { 	//Similar to 'for' loop. Processes until the end of the array.

	var file = file + '.js';

	fs.readFile(file, {
		encoding: 'utf8'
	}, function(error, contents) {
		if (error) {
			console.error(error);
		}
		console.log(file + ' has ' + contents.length + ' characters.');
		callback(); 								// Iterator. Similar to "i++". Tells async to move to the next element in the array.
	});

}, function(err) {
	console.log('End of processing!');
});