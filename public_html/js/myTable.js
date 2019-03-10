app.directive("myTable", function(dataService, $document) {
    return {
        link: function($scope, element, attrs) {
            $scope.headData = [];
            $scope.storedData = [];
            $scope.dataSets = dataService.getDataSets();

            $scope.data = [];
            $scope.filterText = "";
            
            $scope.limit = attrs['limit'] || 10;
            $scope.begin = 0;
            $scope.currentPage = 0;
            $scope.countPages = 0;
            $scope.loaded = false;
            
            $scope.sortColumn = undefined;
            $scope.sortRevert = false;
            
            $scope.selectedText = "";
            
            $scope.loadData = function() {
                resetSelection();
                $scope.filterText = "";
                $scope.sortColumn = undefined;
                $scope.sortRevert = false;
                var data = dataService.getData(Number($scope.dataSetId));
                if (data.length > 0) {
                    $scope.headData = data[0];
                    $scope.data = data.slice(1);
                    $scope.storedData = $scope.data;
                    $scope.loaded = true;
                }
                setCountPages();
                selectPage(1);
            };
            
            $scope.filterByText = function() {
                resetSelection();
                filter();
                sort();
                setCountPages();
                if ($scope.currentPage > $scope.countPages) {
                    selectPage($scope.countPages);
                }
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
                if ($scope.currentPage < $scope.countPages) {
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
            
            $scope.selectRow = function(rowArray, $event) {
                var str = "";
                for (var i = 0; i < rowArray.length; i++) {
                    if (i > 0) {
                        str += ", ";
                    }
                    str += rowArray[i];
                }
                $scope.selectedText = str;
                angular.element(document.querySelectorAll('.myTable tr')).removeClass('active');
                var tr = angular.element($event.currentTarget);
                tr.addClass('active');
            };
            
            function resetSelection() {
               $scope.selectedText = "";
               angular.element(document.querySelectorAll('.myTable tr')).removeClass('active'); 
            }
            
            function filter() {
                $scope.data = $scope.storedData.filter(function(arr) {
                    for (var i = 0; i < arr.length; i++) {
                        var str = String(arr[i]);
                        if (str.indexOf($scope.filterText) !== -1) {
                            return true;
                        }
                    }
                    return false;
                });
            }
            
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
            
            function setCountPages() {
                $scope.countPages = Math.ceil($scope.data.length / $scope.limit);
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

