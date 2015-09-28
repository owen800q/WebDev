(function () {
    'use strict';
    
    angular.module('app.module')
        .controller('BookDetailController', BookDetailController);
        
    BookDetailController.$inject = ['$state', '$stateParams', '$log', 'dataService']    
    function BookDetailController ($state, $stateParams, $log, dataService) {
        var vm = this;
        vm.book = dataService.getBookById(parseInt($stateParams.bookId, 10));
        
        $log.debug('Activated state ', $state.current);
        $log.debug('BookId ', $stateParams.bookId);
        $log.debug('Book ', vm.book);
        //$log.debug('Year ', $stateParams.year);
        //$log.debug('Month ', $stateParams.month);        
    }    
}());