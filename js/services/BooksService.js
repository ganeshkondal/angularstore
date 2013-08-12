
/**
	Service Example in Angular JS
*/

// name of the service = booksService
// what is returned is the function that is referred by the 
// 'booksService'
demoApp.factory('booksFactory', function() {
    var factory = {};
    var books = [{
        title: 'Angular JS',
        price : '14.48',
        author: 'Brad Green and Shyam Seshadri',
        publicationDate: 'Dec 21,2012',            
        imgUrl: 'AngularJS.jpg'
    }, {
        title: 'Developing an AngularJS Edge',
        price : '19.95',
        author: 'Christoper Hiller and Troy Mott',
        publicationDate: 'Dec 20,2012',
        imgUrl: 'DevolopingAnAngularEdge.jpg'
    }, {
        title: 'Recipes with Angular JS',
        price : '9.99',
        author: 'Fredrick Deitz',
        publicationDate: 'Dec 20,2012',
        imgUrl: 'RecipesWithAngularJS.jpg'        

    },
    {
        title: 'Responsive Web Design',
        price : '19.29',
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