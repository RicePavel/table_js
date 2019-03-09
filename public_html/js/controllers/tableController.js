app.controller('tableController', function($scope, dataService, $compile) {
       
   $scope.data = [];
   $scope.dataSets = dataService.getDataSets();
   $scope.loadData = function() {
       $scope.data = dataService.getData(Number($scope.dataSetId));
   }
   $scope.addYet = function() {
       var container = angular.element(document.querySelector('.container'));
       container.append($compile('<div my-table ></div>')($scope));
   }
    
});


