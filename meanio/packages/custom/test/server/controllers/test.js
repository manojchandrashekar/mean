'use strict';

var mongoose = require('mongoose'),
    async = require('async'),
    _ = require('lodash');
var TestModel = mongoose.model('Test');

module.exports = function(TestCtrl) {
    return {
        /**
         * Loads the risks based on id
         */
        test: function(req, res, next, id) {
            TestModel.load(id, function(err, test) {
                if (err) {
                    return next(err);
                }
                if (!test) {
                    return next(new Error('Failed to load test ' + id));
                }
                req.test = test;
                next();
            });
        },

        /**
         * Create
         */
        create: function(req, res) {
            req.assert('name', 'You must enter name').notEmpty();
            req.assert('description', 'You must enter description').notEmpty();

            var errors = req.validationErrors();
            if (errors) {
                return res.status(400).send(errors);
            }
            var test = new TestModel(req.body);
            test.save(function(err) {
                if (err) {
                    var modelErrors = [];
                    if (err.errors) {
                        for (var x in err.errors) {
                            modelErrors.push({
                                param: x,
                                msg: err.errors[x].message,
                                value: err.errors[x].value
                            });
                        }
                        res.status(400).json(modelErrors);
                    }
                    return res.status(400);
                }
                res.json(test);
            });
        },

        /**
         * Show
         */
        show: function(req, res) {
            res.json(req.test);
        },

        /**
         * Updates the edited risk
         */
        update: function(req, res) {
            req.assert('name', 'You must enter name').notEmpty();
            req.assert('description', 'You must enter description').notEmpty();

            var errors = req.validationErrors();
            if (errors) {
                return res.status(400).send(errors);
            }
            var test = req.test;
            test = _.extend(test, req.body);
            test.save(function(err) {
                if (err) {
                    var modelErrors = [];
                    if (err.errors) {
                        for (var x in err.errors) {
                            modelErrors.push({
                                param: x,
                                msg: err.errors[x].message,
                                value: err.errors[x].value
                            });
                        }
                        res.status(400).json(modelErrors);
                    }
                    return res.status(400);
                }
                res.json(test);
            });
        },

        /**
         * Shows all
         */
        all: function(req, res) {
            TestModel.find(function(err, tests) {
                if (err) {
                    return res.status(400).json({
                        error: 'Cannot list the tests'
                    });
                }
                res.json(tests);
            });
        },

        /**
         * Shows
         */
        show: function(req, res) {
            res.json(req.test);
        },

        /**
         * Delete
         */
        destroy: function(req, res) {
            var test = req.test;
            test.remove(function(err) {
                if (err) {
                    return res.status(400).json({
                        error: 'Cannot delete the test'
                    });
                }
                res.json(test);
            });
        },
    }
};
