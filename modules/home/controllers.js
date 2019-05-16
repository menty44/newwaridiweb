'use strict';

angular.module('Home')

.controller('HomeController',
    ['$scope',
    function ($scope, $rootScope, $location) {
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
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
        function ($scope, $rootScope ) {

            $scope.title =  "All Categories";
            $scope.createTitle =  "Create New Category";
            $scope.cpassword =  "";
            $scope.npassword =  "";
            $scope.changePassword = function () {

            };
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

            $scope.title =  "Send Promotional SMS";
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

            $scope.title =  "Send Promotional SMS";
            $scope.cpassword =  "";
            $scope.npassword =  "";
            $scope.changePassword = function () {

            };
        }]);