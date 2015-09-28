(function () {
    'use strict';
    
    angular.module('app.module', ['ui.router']);
    
    angular.module('app.module')
        .config(configRoutes);
        
    angular
        .module('app.module')
        .run(runApp);    
        
    configRoutes.$inject = ['$logProvider','$stateProvider', '$urlRouterProvider']    
    function configRoutes ($logProvider, $stateProvider, $urlRouterProvider) {
        $logProvider.debugEnabled(true);
        
        // For any unmatched url, redirect to home state
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: 'app/home.html'
            })
            .state('books', {
                url: '/books',
                controller: 'BookListController',
                controllerAs: 'vm',
                templateUrl: 'app/book.list.html',
                resolve: {
                    books: function (dataService) {
                        return dataService.getAllBooks();
                    }
                    //promise: function () {
                        //throw 'Error activating books'
                    //}
                }
            })
            .state('bmdetail', {
                url: '/detail/{bookId}',
                controller: 'BookDetailController',
                controllerAs: 'vm',
                templateUrl: 'app/book.detail.html'
            });;
    }
    
    runApp.$inject = ['$rootScope', '$log'];
    function runApp ($rootScope, $log) {
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $log.debug('Successfully changed state: ');
            
            $log.debug('event', event);
            $log.debug('toState', toState);
            $log.debug('toParams', toParams);
            $log.debug('fromState', fromState);
            $log.debug('fromParams', fromParams);    
        });
        
        $rootScope.$on('$stateNoFound', function (event, unfoundState, fromState, fromParams) {
            $log.debug('Requested state not found: ', unfoundState);  
        });
        
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            $log.debug('An error occurred while changing state: ', error);
            
            $log.debug('event', event);
            $log.debug('toState', toState);
            $log.debug('toParams', toParams);
            $log.debug('fromState', fromState);
            $log.debug('fromParams', fromParams);    
        });
    } 
}());