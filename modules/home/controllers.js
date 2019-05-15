'use strict';
 
angular.module('Home')
 
.controller('HomeController',
    ['$scope',
    function ($scope, $rootScope, $location) {
        // $scope.navoff = true;
        $scope.nav = "on";
        $scope.fname += 16.6666666667;
        $scope.lname = "";
        $scope.phone = "";
        $scope.email = "";
        $scope.gender = "";
        $scope.password = "";
        $scope.reload = function reload(){
            // (function()
            //     {
                if( window.localStorage )
                {
                    if( !localStorage.getItem('firstLoad') )
                    {
                    localStorage['firstLoad'] = true;
                    window.location.reload();
                    }
                    else
                    localStorage.removeItem('firstLoad');
                }
                // })();
        };
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
        }]);