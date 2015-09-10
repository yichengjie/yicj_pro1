define(['./services'], function(services) {
    services.service( 'UserLoginService', [ '$rootScope', function( $rootScope ) {
        console.log('userLoginService services .............');
        var service = {
            books: [
                { title: "Magician", author: "Raymond E. Feist" },
                { title: "The Hobbit", author: "J.R.R Tolkien" }
            ],
            addBook: function ( book ) {
                service.books.push( book );
                $rootScope.$broadcast( 'books.update' );
            }
        }
        return service;
    }]);
});