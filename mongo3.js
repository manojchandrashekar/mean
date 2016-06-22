var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema({
	name: {
		type: String,
		required: true
	}
});
var Team = mongoose.model('Team', TeamSchema);

var EmployeeSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	team: {
		type: Schema.ObjectId,
		ref: 'Team'
	},
	empId: {
		type: Number,
		default: 0
	}
});
var Employee = mongoose.model('Employee', EmployeeSchema);

var db = mongoose.connection;
var dbUrl = 'mongodb://localhost:27017/mongo1';

db.on('error', function() {
	console.log('there was an error communicating with the database');
});

mongoose.connect(dbUrl, function(err) {
	if (err) {
		return console.log('there was a problem connecting to the database!' + err);
	}
	console.log('connected!');

	Team.findOne({
		name: 'PHP'
	}, function(error, data) {
		if(error) {
			console.log(error);
		} else {
			Employee.find({team: data._id}, function(error, data) {
				if(error) {
					console.log(error);
				} else {
					console.log(data);
					db.close();
					process.exit();
				}
			});
		}
	});

});