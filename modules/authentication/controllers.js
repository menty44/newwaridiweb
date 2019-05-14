'use strict';
 
angular.module('Authentication')
 
.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        // reset login status
        AuthenticationService.ClearCredentials();
 
        $scope.login = function () {
            console.log('login');
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function(response) {
                if(response.success) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;

                    // $timeout(function() {
                    //     $('.fredError').fadeOut('slow');
                    // }, 1000);

                    setTimeout(function() {
                        $scope.timeOut = true;
                    }, 1000); // <-- time in milliseconds
                    // $(function() {
                    //     setTimeout(function () {
                    //         $(".fredError").hide('blind', {}, 500)
                    //     }, 5000);
                    // });
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