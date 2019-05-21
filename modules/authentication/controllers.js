'use strict';
 
angular.module('Authentication')
 
.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        $rootScope.nav = '';
        // reset login status
        AuthenticationService.ClearCredentials();
 
        $scope.login = function () {
            console.log('login');
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function(response) {
                console.log('nini imekam hapa?', response);
                // if(response.success) {
                if(response[0] !== undefined && response[0] !== 'undefined'){
                    let res = response.message;
                    $scope.newError = "Username or password is incorrect, Please Try again !!!";
                    $scope.dataLoading = false;
                }
                // else
                // if (response[0].__v === 0){
                //     AuthenticationService.SetCredentials($scope.username, $scope.password);
                //     $location.path('/');
                // }
                else if(response.code === 3){
                    console.log('nini imekam hapa mbaya damn', response.message)
                    let res = response.message;
                    // $rootScope.newError = res;
                    $scope.newError = "Username or password is incorrect, Please Try again !!!";
                    $scope.dataLoading = false;
                }

                if(response[0].__v === 0){
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/');
                }
            });
        };
    }])
    .controller('RegisterController',
        ['$scope', '$rootScope', '$location', 'AuthenticationService',
            function ($scope, $rootScope, $location, AuthenticationService) {
                // reset login status
                AuthenticationService.ClearCredentials();

                $scope.register = function () {
                    $scope.dataLoading = true;

                };
    }]);