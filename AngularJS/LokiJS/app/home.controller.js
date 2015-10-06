(function () {
    'use strict';
    
    angular.module('app')
        .controller('HomeController', HomeController);
        
    HomeController.$inject = ['$state', '$log', 'Loki']    
    function HomeController ($state, $log, Loki) {
        var vm = this;
        vm.db;
        vm.fileName = 'loki.js';
        vm.message = 'Home is where the heart is';
        $log.debug('Home state activated');
        
        vm.loadFile = function () {
            vm.db = new Loki(vm.fileName);
            $log.debug('Loki => %o', vm.db);
        };
    }    
}());