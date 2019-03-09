app.directive("myTable", function(dataService) {
    return {
        link: function($scope, element, attrs) {
            $scope.data = [];
            $scope.dataSets = dataService.getDataSets();
            $scope.loadData = function() {
                $scope.data = dataService.getData(Number($scope.dataSetId));
            }
        },
        templateUrl: 'js/views/directives/myTable.html',
        restrict: 'EA',
        scope: {}
    };
});
/*
app.directive("dataTable", function() {
    return {
        link: function($scope, dataService) {
            $scope.data = [];
            $scope.dataSets = dataService.getDataSets();
            $scope.loadData = function() {
                $scope.data = dataService.getData(Number($scope.dataSetId));
            }
        },
        templateUrl: '/views/directives/dataTable.html',
        restrict: 'E'
    };
});
*/
