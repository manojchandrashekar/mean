(function() {
    'use strict';

    /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(Test, app, auth, database, circles) {

        var requiresAdmin = circles.controller.hasCircle('admin');
        var requiresLogin = circles.controller.hasCircle('authenticated');

        app.get('/api/test/example/anyone', function(req, res) {
            res.send('Anyone can access this');
        });

        app.get('/api/test/example/auth', requiresLogin, function(req, res) {
            res.send('Only authenticated users can access this');
        });

        app.get('/api/test/example/admin', requiresAdmin, function(req, res) {
            res.send('Only users with Admin role can access this');
        });

        app.get('/api/test/example/render', function(req, res) {
            Test.render('index', {
                package: 'test'
            }, function(err, html) {
                //Rendering a view from the Package server/views
                res.send(html);
            });
        });

        var testctrl = require('../controllers/test')(Test);

        // APIS
        app.route('/api/test')
            .post(testctrl.create)
            .get(testctrl.all);

        app.route('/api/test/:testId')
            .get(testctrl.show)
            .put(testctrl.update)
            .delete(testctrl.destroy);

        app.param('testId', testctrl.test);
    };
})();