(function () {
    'use strict';
    
    angular.module('app.module')
        .controller('HomeController', HomeController);
        
    HomeController.$inject = ['$state', '$log']    
    function HomeController ($state, $log) {
        var vm = this;
        vm.message = 'is where the heart is';
        $log.debug('Home state activated');
        
        vm.refresh = function () {
            $log.debug($state.current);
            $state.reload();
        };
    }    
}());