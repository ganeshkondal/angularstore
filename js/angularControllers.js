// no dependencies for this controller

var demoApp = angular.module('demoApp', ['ngSanitize', 'ngResource']);

// Routers
// Gluing View and the controller
// instead of having demoApp - in all thes.me places,
// the previous semi-colon could be taken and - config, factory can be
// with a dot '.' beginning - this is called chaining
// $routeProvider, $locationProvider - are dependency injected by Angular JS
demoApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/books', {
            controller: 'FindBookController',
            templateUrl: 'views/books.html'
        })
        .when('/addbooks', {
            controller: 'FindBookController',
            templateUrl: 'views/addbooks.html'
        })
        .otherwise('/', {
            // redirectTo: '/books'
        });

        $locationProvider.html5Mode( true );

});


// sample factory being passed here;
// $scope, factory variable passed via dependency injection
demoApp.controller('FindBookController', function($scope, $location, booksFactory) {

    init();

    // All initialization code gets in here.,
    function init() {
        
        // Factory 
        $scope.books = booksFactory.getBooks();

        $scope.snippet ='<span style="font-weight:bold; color:red"> TEXT THAT SIMULATES AN EXTERNAL HTML SNIPPET </span> ';


        $scope.newBook = {};
        $scope.newBook.hidePreview=true;
    }


    $scope.addBook = function() {
        $scope.newBook.hidePreview=false;
        $scope.books.push({
            price: $scope.newBook.price,
            title: $scope.newBook.title,
            author: $scope.newBook.author,
            publicationDate: $scope.newBook.publicationDate,
            imgUrl: $scope.newBook.imgUrl
        });
    
    };

    $scope.postImageFieldEntry = function() { 
        $scope.newBook.hidePreview=false;
    }

    $scope.titleOnMouseOver = function() { 
        $scope.ngBindTextOnMouseOver= "Title is bound to the value model, via ng-bind HTML directive ";
    }

    $scope.titleOnMouseLeave = function() { 
        $scope.ngBindTextOnMouseOver='';
    }
});