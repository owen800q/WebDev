/* global Firebase */
(function (app) {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    /* @ngInject */
    HomeController.$inject = ['$firebaseArray', '$log'];
    function HomeController($firebaseArray, $log) {
        var vm = this;
        vm.addSnippet = addSnippet;
        vm.message = 'Hello World!';

        activate();

        //////////////////////////////////////////////////////////////////////////////////////////

        function activate () {
            $log.info('Activated HomeController ');
            var ref = new Firebase('https://snipz.firebaseio.com');
            vm.snippets = $firebaseArray(ref);
            $log.debug(vm.snippets);
        }
        
        function addSnippet () {
            vm.snippets.$add(vm.snippet);
        }
    }
}());
