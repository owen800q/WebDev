(function () {
    'use strict';

    angular.module('app', ['ngRoute', 'firebase']);
    angular.module('app').config(configRoutes);
    angular.module('app').run(runBlock);

    ////////////////////////////////////////////////////////////////////

    /* @ngInject */
    configRoutes.$inject = ['$routeProvider'];
    function configRoutes ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    /* @ngInject */
    runBlock.$inject = ['$log'];
    function runBlock ($log) {
        $log.info('APP loaded', angular.module('app'));
    }
}());
