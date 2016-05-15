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
        vm.addLink = addLink;
        vm.message = 'Hello World!';

        activate();

        //////////////////////////////////////////////////////////////////////////////////////////

        function activate () {
            $log.info('Activated HomeController ');
            var ref = new Firebase('https://linkz.firebaseio.com/links');
            vm.links = $firebaseArray(ref);
            $log.debug(vm.links);
        }

        function addLink () {
            vm.links.$add(vm.link);
        }
    }
}());
