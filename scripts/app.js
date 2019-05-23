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
            controller: 'profileController',
            templateUrl: 'modules/home/views/home.html'
        })

        .when('/services', {
            controller: 'serviceController',
            templateUrl: 'modules/home/views/services.html'
        })

        .when('/services/new', {
            controller: 'serviceController',
            templateUrl: 'modules/home/views/newService.html'
        })

        .when('/categories', {
            controller: 'categoriesController',
            templateUrl: 'modules/home/views/categories.html'
        })

        .when('/cat/new', {
            controller: 'categoriesController',
            templateUrl: 'modules/home/views/newCategory.htm'
        })

        .when('/finance', {
            controller: 'financeController',
            templateUrl: 'modules/home/views/finance.html'
        })

        .when('/ads', {
            controller: 'adsController',
            templateUrl: 'modules/home/views/adverts.html'
        })

        .when('/ads/new', {
            controller: 'adsController',
            templateUrl: 'modules/home/views/newAd.html'
        })

        .when('/reports', {
            controller: 'reportsController',
            templateUrl: 'modules/home/views/reports.html'
        })

        .when('/profile', {
            controller: 'profileController',
            templateUrl: 'modules/home/views/profile.html'
        })

        .when('/profile/resetpassword', {
            controller: 'ResetPasswordController',
            templateUrl: 'modules/home/views/resetPassword.html'
        })

        .when('/users', {
            controller: 'loadUserController',
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
            controller: 'smsController',
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

        .when('/tickets', {
            controller: 'ticketController',
            templateUrl: 'modules/home/views/ticket.htm'
        })

        .when('/tickets/pending', {
            controller: 'ticketController',
            templateUrl: 'modules/home/views/pendingtickets.html'
        })


        .when('/tickets/resolved', {
            controller: 'ticketController',
            templateUrl: 'modules/home/views/resolvedtickets.html'
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
                if ($location.path() !== '/login' && !$rootScope.globals.currentUser
                    // || $location.path() !== '/categories/create' && !$rootScope.globals.currentUser
                ) {
                    $location.path('/login');
            }
        });
    }]);