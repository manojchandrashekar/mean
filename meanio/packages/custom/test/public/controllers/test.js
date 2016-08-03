(function() {
    'use strict';

    /* jshint -W098 */

    function TestController($scope, Global, Test, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'test'
        };

        $scope.checkCircle = function() {
            Test.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.test')
        .controller('TestController', TestController);

    TestController.$inject = ['$scope', 'Global', 'Test', '$stateParams'];

})();
