(function () {
    'use strict';

    angular.module('scrumboard.demo')
        .config(['$locationProvider', '$routeProvider', config])
        .run(['$http', run]);

    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider
            .when('/', {
                templateUrl: '/static/html/scrumboard.html',
                controller: 'ScrumboardController'
            })
            .when('/login', {
                templateUrl: '/static/html/login.html',
                controller: 'LoginController'
            })
            .otherwise('/');
    }

    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }
})();