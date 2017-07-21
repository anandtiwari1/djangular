/**
 * Created by anand.tiwari on 7/9/17.
 */
(function () {
        'use strict';
        angular.module('scrumboard.demo', ['ngRoute'])
            .controller(
                'ScrumboardController',
                [
                    '$scope',
                    '$http',
                    ScrumboardController
                ]
            );

    function ScrumboardController($scope, $http) {
        $scope.add = function (list, title) {
            var card = {
                list: list.id,
                title: title
            };
            $http.post('/scrumboard/cards/', card).
                then(function (response) {
                list.cards.push(response.data);
            }, function () {
                alert('Unable to save card.')
            });
        };

        $scope.login = function () {
            $http.post('/auth_api/login/',
                {username: 'anand', password: 'anand123'});
        };

        $scope.data = [];

        $http.get("/scrumboard/lists/").then(function (response) {
            $scope.data = response.data;
        });
    }
})();