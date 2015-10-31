/**
 * Created by dave on 10/31/15.
 */
(function() {

    var ProjectController = function ($scope, $log, $window, projectFactory, appSettings) {
        $scope.appSettings = appSettings;
        $scope.systemTypes = [];
        $scope.unitTypes = [];

        function init() {
            $scope.systemTypes = projectFactory.getSystemTypes();
        }

        init();

        $scope.mySystemTypeChanged = function() {
            $scope.unitTypes = [];
            if($scope.mySystemType != null) {
               $scope.unitTypes = projectFactory.getUnitTypes($scope.mySystemType.id)
            }
        };

    };

    ProjectController.$inject = ['$scope', '$log', '$window', 'projectFactory',
        'appSettings'];

    angular.module('ccsApp')
        .controller('ProjectController', ProjectController);

}());