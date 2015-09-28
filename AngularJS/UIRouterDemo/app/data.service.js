(function () {
    'use strict';
    
    angular.module('app.module')
        .factory('dataService', dataService);
        
    dataService.$inject = ['$log', '$q']    
    function dataService ($log, $q) {
        var bookList = [
                {
                    id: 1,
                    title: 'Sense and Sensibility'
                },
                {
                    id: 2,
                    title: 'Madame Bovary'
                },
                {
                    id: 3,
                    title: 'Dorian Grey'
                },
                {
                    id: 4,
                    title: 'Robinson Crusoe'
                }
            ];
            
        return {
            getBookById: getBookById,
            getAllBooks: getAllBooks
        };
        
        function getAllBooks () {
            return $q.when(bookList);
        };
        
        function getBookById (aId) {
            var book;
            
            bookList.forEach(function (obj) {
                if (obj.id === aId) {
                    book = obj;
                }
            });
            return book;
        }
    }    
}());