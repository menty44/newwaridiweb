'use strict';

angular.module('Home')

.controller('HomeController',
    ['$scope',
    function ($scope, $rootScope, $location, http) {
        // $scope.navoff = true;
        $scope.nav = "on";
        $scope.fname = "";
        $scope.lname = "";
        $scope.phone = "";
        $scope.email = "";
        $scope.gender = "";
        $scope.password = "";
        $scope.logout = function logout(){
            console.log('logout test');

        }

        $scope.loadUsers = function loadUsers(){
            $http({
                method : "GET",
                url : "http://localhost:4000/register"
                }).then(function mySuccess(response) {
                    console.log("response", response.data);
                $scope.myWelcome = response.data;
                }, function myError(response) {
                $scope.myWelcome = response.statusText;
                });
        }

    }])

    .controller('loadUserController',
    ['$scope', '$rootScope', '$http',
        function ($scope, $rootScope, $http) {

            $scope.title =  "All Users";
            $scope.cpassword =  "";
            $scope.npassword =  "";
            $scope.loadUsers = function loadUsers(){
                $http({
                    method : "GET",
                    url : "http://localhost:4000/register"
                    }).then(function mySuccess(response) {
                        console.log("response", response.data);
                    $scope.myWelcome = response.data;
                    }, function myError(response) {
                    $scope.myWelcome = response.statusText;
                    });
            }
        }])

.controller('ResetPasswordController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
        function ($scope, $rootScope ) {

            $scope.title =  "Reset Password";
            $scope.cpassword =  "";
            $scope.npassword =  "";
            $scope.changePassword = function () {

            };
        }])

.controller('singleSmsController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
        function ($scope, $rootScope ) {

            $scope.title =  "Send Single SMS";
            $scope.cpassword =  "";
            $scope.npassword =  "";
            $scope.changePassword = function () {

            };
        }])

.controller('multipleSmsController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
        function ($scope, $rootScope ) {

            $scope.title =  "Send Promotional SMS";
            $scope.cpassword =  "";
            $scope.npassword =  "";
            $scope.changePassword = function () {

            };
        }])

.controller('categoriesController',
    ['$scope', '$rootScope', '$http',
    function ($scope, $rootScope, $http) {

            $scope.title =  "All Categories";
            $scope.createTitle =  "Create New Category";
            
            $scope.loadCategories = function loadCategories(){
                $http({
                    method : "GET",
                    url : "http://localhost:4000/category"
                    }).then(function mySuccess(response) {
                        console.log("response", response.data);
                    $scope.myWelcome = response.data;
                    }, function myError(response) {
                    console.log("badResponse", response.data);
                    $scope.myWelcome = "No Data Available";
                    });
            }
        }])


.controller('financeController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
        function ($scope, $rootScope ) {

            $scope.title =  "Send Promotional SMS";
            $scope.cpassword =  "";
            $scope.npassword =  "";
            $scope.changePassword = function () {

            };
        }])

.controller('profileController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
        function ($scope, $rootScope ) {

            $scope.title =  "Send Promotional SMS";
            $scope.cpassword =  "";
            $scope.npassword =  "";
            $scope.changePassword = function () {

            };
        }])

.controller('reportsController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
        function ($scope, $rootScope ) {

            $scope.title =  "Send Promotional SMS";
            $scope.cpassword =  "";
            $scope.npassword =  "";
            $scope.changePassword = function () {

            };
        }])

.controller('profileController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
        function ($scope, $rootScope ) {

            $scope.title =  "Send Promotional SMS";
            $scope.cpassword =  "";
            $scope.npassword =  "";
            $scope.changePassword = function () {

            };
        }])

.controller('adsController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
        function ($scope, $rootScope ) {

            $scope.title =  "List All Advertisements";
            $scope.newTitle =  "Create New Advertisement";
            $scope.cpassword =  "";
            $scope.npassword =  "";
            $scope.changePassword = function () {

            };
        }])

.controller('smsController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
        function ($scope, $rootScope ) {

            $scope.title =  "Send Promotional SMS";
            $scope.cpassword =  "";
            $scope.npassword =  "";
            $scope.changePassword = function () {

            };
        }])

.controller('ticketController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
        function ($scope, $rootScope ) {

            $scope.title =  "All Tickets";
            $scope.cpassword =  "";
            $scope.npassword =  "";
            $scope.changePassword = function () {

            };
        }])

.controller('serviceController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
        function ($scope, $rootScope ) {

            $scope.title =  "Create New Service";
            $scope.cpassword =  "";
            $scope.npassword =  "";
            
            $scope.bars = function bars(x){
                drop(x);
                // console.log(x);
                // JSON.stringify(x);
            };

            function drop(x){
                $scope.bar = x;
            };

            $scope.changePassword = function () {

            };
        }]);