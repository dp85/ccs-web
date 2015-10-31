/**
 * Created by dave on 10/31/15.
 */
function HeaderController($scope, $location)
{
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}

HeaderController.$inject = ['$scope', '$location'];

angular.module('ccsApp')
    .controller('HeaderController', HeaderController);