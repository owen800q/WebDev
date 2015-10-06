(function () {
    'use strict';

    angular
        .module('app', ['ui.router', 'lokijs']);
        
    angular.module('app')
        .config(configRoutes);

    angular
        .module('app').run(function ($log) {
            $log.debug('APP loaded', angular.module('app'));
        });

    configRoutes.$inject = ['$logProvider','$stateProvider', '$urlRouterProvider'] 
    function configRoutes ($logProvider, $stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: 'app/home.html'
            });
    }
}());
