app.controller('tableController', function($scope, dataService, $compile) {
       
   $scope.addYet = function() {
       var container = angular.element(document.querySelector('.container'));
       container.append($compile('<my-table limit="3"/>')($scope));
   }
    
});


