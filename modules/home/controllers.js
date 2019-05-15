'use strict';
 
angular.module('Home')
 
.controller('HomeController',
    ['$scope',
    function ($scope, $rootScope, $location) {
        // $scope.navoff = true;
        $scope.nav = "on";
        $scope.firstName = "John";


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
      
    }]);