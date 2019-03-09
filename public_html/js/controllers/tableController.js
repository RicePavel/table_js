app.controller('tableController', function($scope, dataService) {
       
   $scope.data = [];
   $scope.dataSets = dataService.getDataSets();
   $scope.loadData = function() {
       $scope.data = dataService.getData(Number($scope.dataSetId));
   }
    
});


