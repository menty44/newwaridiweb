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
                if(response.success) {
                    // ()=>{
                    //     console.log('status on');
                    //     $rootScope.nav = 'on';
                    // }
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/');
                    // (function()
                    //     {
                    //     if( window.localStorage )
                    //     {
                    //         if( !localStorage.getItem('firstLoad') )
                    //         {
                    //         localStorage['firstLoad'] = true;
                    //         $location.path('/');
                    //         window.location.reload();

                    //         }  
                    //         else
                    //         localStorage.removeItem('firstLoad');
                    //     }
                    //     })();
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }])
    .controller('RegisterController',
        ['$scope', '$rootScope', '$location', 'AuthenticationService',
            function ($scope, $rootScope, $location, AuthenticationService) {
                // reset login status
                AuthenticationService.ClearCredentials();

                $scope.login = function () {
                    $scope.dataLoading = true;
                    console.log('login');
                    console.log('username '+$scope.username);
                    console.log('password    '+$scope.password);
                    AuthenticationService.Login($scope.username, $scope.password, function(response) {
                        if(response.success) {
                            AuthenticationService.SetCredentials($scope.username, $scope.password);
                            $location.path('/');
                        } else {
                            $scope.error = response.message;
                            $scope.dataLoading = false;
                        }
                    });
                };
    }]);