// var app = angular.module('app', ['ui.router']);
// app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
//   $stateProvider.state('firstMessage', {
//     url: '/first-msg',
//     templateUrl: 'msg1.htm',
//     controller: 'msg1'

//   })
//     .state('secondMessage', {
//       url: '/book_details/:id',
//       templateUrl:'./views/book_details.html'
// //      controller: 'msg2'

//     })
//     .state('root', {
//       url: '/',
//       template: '<p> this is just a message </p>'

//     });

//   $urlRouterProvider.otherwise('/');
// }]);

// app.controller('msg1', ['$scope', function ($scope) {
//   $scope.a = 10;
//   $scope.b = 20;
// }]);

// app.controller('msg2', ['$scope', function ($scope) {
//   $scope.c = 30;
//   $scope.d = 40;
// }]);

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// var app = angular.module('app',['ngRoute']);
// app.config(function($routeProvider){
    
//    $routeProvider.when('/',{
//        controller: 'DashboardController',
//        templateUrl: 'views/dashboard.html'
       
//    })
//    .when('/book_details/:id',{
//        controller: 'testController',
//        templateUrl: 'views/book_details.html'
       
//    })
//    .when('/customers/details/:id',{
//        controller: 'CustomerController',
//        templateUrl: 'views/customer_details.html'
       
//    })
//     .when('/customers/edit/:id',{
//        controller: 'CustomerController',
//        templateUrl: 'views/edit_customer.html'
       
//    })
//    .when('/invoices',{
//        controller: 'InvoiceController',
//        templateUrl: 'views/invoices.html'
       
//    })
//     .when('/invoices/details/:id',{
//        controller: 'InvoiceController',
//        templateUrl: 'views/invoice_details.html'
       
//    })
//    .when('/customers/add',{
//        controller: 'CustomerController',
//        templateUrl: 'views/add_customer.html'
       
//    })
//    .when('/invoices/add',{
//        controller: 'InvoiceController',
//        templateUrl: 'views/add_invoice.html'
       
//    })
//     .when('/invoices/edit/:id',{
//        controller: 'InvoiceController',
//        templateUrl: 'views/edit_invoice.html'
       
//    })
//     .otherwise({
//        redirectTo: '/'
//    }); 
// });