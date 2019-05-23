'use strict';

angular.module('Home')

.controller('HomeController',
    ['$scope', '$rootScope', '$http',
        function ($scope, $rootScope, $http) {

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
            $scope.load = false;
            $http({
                method : "GET",
                url : "http://localhost:4000/register"
                }).then(function mySuccess(response) {
                    console.log("response", response.data);
                    console.log("response", response.data.length);
                $scope.userscount = response.data.length;
                $scope.load = true;
                }, function myError(response) {
                    console.log(response);
                    console.log("no data");
                $scope.load = false;
                $scope.noData = "No data available!";
                });
        }

            $scope.loadSMS = function loadSMS(){
                $scope.load = false;
                $http({
                    method : "GET",
                    url : "http://localhost:4000/sms"
                }).then(function mySuccess(response) {
                    console.log("response", response.data);
                    $scope.smscount = response.data.length;
                    $scope.load = true;
                }, function myError(response) {
                    console.log("badResponse", response.data);
                    $scope.load = false;
                });
            }

            $scope.loadServiceshome = function loadServiceshome(){
                $scope.load = false;
                $http({
                    method : "GET",
                    url : "http://localhost:4000/services/"
                }).then(function mySuccess(response) {
                    console.log("response", response.data);
                    $scope.loadServices = response.data;
                    $scope.loadServicesTotal = response.data.length;
                    $scope.load = true;
                }, function myError(response) {
                    console.log("badResponse", response.data);
                    $scope.noData = "No Data Available";
                    $scope.load = false;
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
                        console.log("bad no data")
                    $scope.noData = "No data available !";
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
    ['$scope', '$rootScope', '$http',
        function ($scope, $rootScope, $http) {

            $scope.title =  "Send Single SMS";

            $scope.singleSms =  (msg, no) => {
                console.log(no)
                console.log(msg)

                let dat = function () {

                    if(!msg.startsWith("0")){
                        return  msg;
                    }else {
                        let newMsg = msg.substr(1);
                        return "+254"+newMsg;
                    }

                }

                $http({
                    url: "http://localhost:4000/sms/add",
                    method: "POST",
                    data: {
                        "number": "+254720106420",
                        "message": dat()
                    }
                }).then(function(response) {
                        // success
                        console.log("response", response.data);
                        swal("Success!", "Sent successfully! ", "success");
                    },
                    function(response) { // optional
                        // failed
                        console.log("response", response.data);
                        swal("Error!", "Error while trying to save! "+t, "error");
                    });

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
    ['$scope', '$rootScope', '$http','$location',
    function ($scope, $rootScope, $http, $location) {

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
                    $scope.noData = "No Data Available";
                    });
            }

        $scope.createCategories = (t)=>{
                console.log("response", t);

            $http({
                url: "http://localhost:4000/category/add",
                method: "POST",
                data: { "name" : t }
            }).then(function(response) {
                // success
                console.log("response", response.data);
                $location.path('/categories');
                swal("Success!", "Saved successfully! "+t, "success");
            },
            function(response) { // optional
                // failed
                console.log("response", response.data);
                swal("Error!", "Error while trying to save! "+t, "error");
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
['$scope', '$rootScope', '$http',
function ($scope, $rootScope, $http) {

            $scope.title =  "Send Promotional SMS jkhgjkhgkjhg";
            $scope.cpassword =  "";
            $scope.npassword =  "";

            $scope.loadSMS = function loadSMS(){
                $http({
                    method : "GET",
                    url : "http://localhost:4000/sms"
                    }).then(function mySuccess(response) {
                        console.log("response", response.data);
                    $scope.myWelcome = response.data;
                    }, function myError(response) {
                    console.log("badResponse", response.data);
                    $scope.noData = "No Data Available";
                    });
            }
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
    ['$scope', '$rootScope', '$http',
        function ($scope, $rootScope, $http) {

            $scope.title =  "List Services";
            $scope.loadServices = function loadServices(){
                $http({
                    method : "GET",
                    url : "http://localhost:4000/services/"
                }).then(function mySuccess(response) {
                    console.log("response", response.data);
                    $scope.loadServices = response.data;
                    $scope.loadServicesTotal = response.data.length;
                }, function myError(response) {
                    console.log("badResponse", response.data);
                    $scope.noData = "No Data Available";
                });
            }
        }]);