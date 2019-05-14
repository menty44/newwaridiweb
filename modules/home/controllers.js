'use strict';
 
angular.module('Home')
 
.controller('HomeController',
    ['$scope',
    function ($scope, $rootScope, $location) {
        // (function()
        //     {
        //     if( window.localStorage )
        //     {
        //         if( !localStorage.getItem('firstLoad') )
        //         {
        //         localStorage['firstLoad'] = true;
        //         window.location.reload();
        //         }  
        //         else
        //         localStorage.removeItem('firstLoad');
        //     }
        //     })();

        // $scope.navoff = true;
        $rootScope.nav = 'on';


        $scope.logout = function logout($location){
            console.log('logout test');
            
        }
      
    }]);