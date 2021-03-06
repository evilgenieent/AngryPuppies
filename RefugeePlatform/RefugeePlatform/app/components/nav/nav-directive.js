
(function () {
    'use strict';
    /**
    * @ngdoc directive
    * @name ht-nav
    * @description Directive of the navigation bar.
    */
    angular.module('rp.app.nav')
        .directive('htNav',
            [
                '$mdSidenav',

                htNavBuilder
            ]);

    function htNavBuilder($mdSidenav) {
        var directive = {};

        angular.extend(directive, {
            restrict: 'A', // please do not change

            replace: true,

            templateUrl: 'app/components/nav/nav.html',

            scope: false,

            link: link,
        });

        return directive;

        //#region PRIVATE
        function link(scope, element, attrs, ctrl) {

            angular.extend(scope, {
                vm: {
                    toggleLeft: buildToggler('left'),
                    toggleRight: buildToggler('right'),
                },
            });

            return scope;

            function buildToggler(componentId) {
                return function () {
                    $mdSidenav(componentId).toggle();
                }
            }

        }
        //#endregion
    }
})();
