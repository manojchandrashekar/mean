var express = require('express');
var app = express();

// Route one
app.get('/teams/:team/employees/:employeeId', function(req, res, next) {
    console.log('team = ' + req.params.team);
    console.log('employeeId = ' + req.params.employeeId);
    res.send('path one');
});

// Route two
app.get('/teams/:team/employees', function(req, res, next) {
    console.log('set response type');
    res.set('Content-Type', 'application/json');
    res.locals.data = 100;
    next();
}, function(req, res, next) {
    console.log('team = ' + req.params.team);
    console.log(res.locals.data);
    res.send('path two');
});

// Route three
app.get(/^\/groups\/(\w+)\/(\d+)$/, function(req, res, next) {
    console.log('groupname = ' + req.params[0]);
    console.log('groupId = ' + req.params[1]);
    res.send('path three');
});

var server = app.listen(3000, function() {
    console.log('Server started on port 3000');
});