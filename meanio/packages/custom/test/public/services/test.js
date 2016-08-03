(function() {
    'use strict';

    function Test($http, $q) {
        return {
            name: 'test',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/test/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.test')
        .factory('Test', Test);

    Test.$inject = ['$http', '$q'];

})();
