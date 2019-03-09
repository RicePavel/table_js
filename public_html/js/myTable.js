app.directive("myTable", function(dataService) {
    return {
        link: function($scope, element, attrs) {
            $scope.headData = [];
            $scope.data = [];
            $scope.dataSets = dataService.getDataSets();
            
            $scope.limit = attrs['limit'] || 10;
            $scope.begin = 0;
            $scope.currentPage = 0;
            $scope.pagesCount = 0;
            $scope.loaded = false;
            
            $scope.sortColumn = undefined;
            $scope.sortRevert = false;
            
            $scope.loadData = function() {
                $scope.sortColumn = undefined;
                $scope.sortRevert = false;
                var data = dataService.getData(Number($scope.dataSetId));
                if (data.length > 0) {
                    $scope.headData = data[0];
                    $scope.data = data.slice(1);
                    $scope.loaded = true;
                }
                initPageParameters();
                selectPage(1);
            };
            
            $scope.range = function(min, max, step) {
                step = step || 1;
                var input = [];
                for (var i = min; i <= max; i += step) {
                    input.push(i);
                }
                return input;
            };
            
            $scope.selectPage = function(n) {
                selectPage(n);
                return false;
            };
            
            $scope.prevPage = function() {
                if ($scope.currentPage > 1) {
                    selectPage($scope.currentPage - 1);
                }
                return false;
            };
            
            $scope.nextPage = function() {
                if ($scope.currentPage < $scope.pagesCount) {
                    selectPage($scope.currentPage + 1);
                }
                return false;
            };
            
            $scope.sortThisColumn = function(number) {
                var column = Number(number);
                if (column === $scope.sortColumn) {
                    $scope.sortRevert = !$scope.sortRevert;
                }
                $scope.sortColumn = column;
                sort();
            };
            
            function sort() {
                if ($scope.sortColumn !== undefined) {
                    $scope.data.sort(function (a, b) {
                        if (a[$scope.sortColumn] < b[$scope.sortColumn]) {
                            if ($scope.sortRevert === false) {
                                return -1;
                            } else {
                                return 1;
                            }
                        } else if (a[$scope.sortColumn] > b[$scope.sortColumn]) {
                            if ($scope.sortRevert === false) {
                                return 1;
                            } else {
                                return -1;
                            }
                        }
                        return 0;
                    });
                }
            }
            
            function initPageParameters() {
                $scope.pagesCount = Math.ceil($scope.data.length / $scope.limit);
            }
            
            function selectPage(n) {
                $scope.currentPage = n;
                $scope.begin = ($scope.currentPage - 1) * $scope.limit;
            }
        },
        templateUrl: 'js/views/directives/myTable.html',
        restrict: 'EA',
        scope: {}
    };
});

