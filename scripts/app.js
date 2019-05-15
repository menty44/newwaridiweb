'use strict';

// declare modules
angular.module('Authentication', []);
angular.module('Home', []);

angular.module('BasicHttpAuthExample', [
    'Authentication',
    'Home',
    'ngRoute',
    'ngCookies'
])
 
.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'modules/authentication/views/login.html',
            // hideMenus: true
        })
 
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/home.html'
        })

        .when('/profile', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/home.html'
        })

        .when('/services', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/services.html'
        })

        .when('/categories', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/categories.html'
        })

        .when('/finance', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/finance.html'
        })

        .when('/ads', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/adverts.html'
        })

        .when('/reports', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/reports.html'
        })

        .when('/profile', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/profile.html'
        })

        .when('/profile/resetpassword', {
            controller: 'ResetPasswordController',
            templateUrl: 'modules/home/views/resetPassword.html'
        })

        .when('/users', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/users.html'
        })

        .when('/users/new', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/newUser.html'
        })

        .when('/register', {
            controller: 'RegisterController',
            templateUrl: 'modules/authentication/views/register.html',
            // hideMenus: true
        })

        .when('/sms/list', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/sms.html'
        })

        .when('/sms/single', {
            controller: 'singleSmsController',
            templateUrl: 'modules/home/views/singlesms.html'
        })

        .when('/sms/multiple', {
            controller: 'multipleSmsController',
            templateUrl: 'modules/home/views/multiplesms.html'
        })
 
        .otherwise({ redirectTo: '/login' });
}])
 
.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
            
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            // if ($location.path() !== '/login' && $location.path() !== '/services' && $location.path() !== '/categories' &&
            //     $location.path() !== '/users' &&  $location.path() !== '/ads' &&   !$rootScope.globals.currentUser) {
                if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                    $location.path('/login');
            }
        });
    }]);