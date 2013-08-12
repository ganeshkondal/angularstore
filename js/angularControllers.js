// no dependencies for this controller
var demoApp = angular.module('demoApp', ['ngSanitize']);

// Routers
// Gluing View and the controller
// instead of having demoApp - in all thes.me places,
// the previous semi-colon could be taken and - config, factory can be
// with a dot '.' beginning - this is called chaining
demoApp.config(function($routeProvider) {
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
            redirectTo: '/books'
        });

});

demoApp.factory('booksFactory', function() {
    var factory = {};
    var books = [{
        title: 'Angular JS',
        price : '$14.48',
        author: 'Brad Green and Shyam Seshadri',
        publicationDate: 'Dec 20,2012',            
        imgUrl: 'AngularJS.jpg'
    }, {
        title: 'Developing an AngularJS Edge',
        price : '$19.95',
        author: 'Christoper Hiller and Troy Mott',
        publicationDate: 'Dec 20,2012',
        imgUrl: 'DevolopingAnAngularEdge.jpg'
    }, {
        title: 'Recipes with Angular JS',
        price : '$9.99',
        author: 'Fredrick Deitz',
        publicationDate: 'Dec 20,2012',
        imgUrl: 'RecipesWithAngularJS.jpg'        

    },
    {
        title: 'Responsive Web Design',
        price : '$19.29',
        author: 'Tim Kadlec and Aaron Gustafson',
        publicationDate: 'Dec 20,2012',
        imgUrl: 'ResponsiveWebDesign.jpg'        
    }
    ];

    // Factory Method that fetches the list of books.
    // Either from a backend service or via cached dataset.
    factory.getBooks = function() {
        return books;
    };
    return factory;

});

// sample factory being passed here;
// $scope, factory variable passed via dependency injection
demoApp.controller('FindBookController', function($scope, $location, booksFactory) {

    init();

    // All initialization code gets in here.,
    function init() {
        $scope.books = booksFactory.getBooks();
        $scope.snippet ='<span style="color:red">---</span>';
        $scope.newBook = {};
        $scope.newBook.hidePreview=true;
    }


    $scope.addBook = function( $location ) {
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