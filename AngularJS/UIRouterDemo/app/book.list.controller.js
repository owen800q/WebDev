(function () {
    'use strict';
    
    angular.module('app.module')
        .controller('BookListController', BookListController);
        
    BookListController.$inject = ['$state', '$log', 'books']    
    function BookListController ($state, $log, books) {
        var vm = this;
        vm.books = books;
        $log.debug('Activated state ', $state.current);
        $log.debug('vm.books = ', vm.books);
        
        vm.refresh = function () {
            $log.debug('Reloaded state ', $state.current);
            $state.reload();
        };
    }    
}());