var testApp = angular.module('testApp', []);

testApp.controller('bookController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.home = "This is the homepage";
    $scope.id = undefined;

    $http.get("/api/books")
        .success(function (response) {
            console.log('Inside')
            $scope.booklist = response;
        }, function errorCallback(response) {
            console.log("Unable to perform get request");
        });

    //Get ID of selected book
    $scope.getBookIdOfSelectedBook = function (id) {
        $scope.id = id;
        $scope.getBookDetails(id);
        // window.location.href = "./../views/book_details.html?book_id=" + id;
    }

    //Get details of single book
    $scope.getBookDetails = function (id) {
        $http.get("/api/books/" + id)
            .success(function (response) {
                console.log('Inside')
                $scope.singleBook = JSON.stringify(response);
                console.log("Single book :: " + JSON.stringify(response))
            }, function errorCallback(response) {
                console.log("Unable to perform get request");
            });
    }
}]);