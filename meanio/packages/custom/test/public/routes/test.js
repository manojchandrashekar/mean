(function() {
    'use strict';

    function Test($stateProvider) {
        $stateProvider.state('test example page', {
            url: '/test/example',
            templateUrl: 'test/views/index.html'
        }).state('test circles example', {
            url: '/test/example/:circle',
            templateUrl: 'test/views/example.html'
        });
    }

    angular
        .module('mean.test')
        .config(Test);

    Test.$inject = ['$stateProvider'];

})();
