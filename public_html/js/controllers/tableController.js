app.controller('tableController', function($scope) {
    
    $scope.data = [
        { id: 'Идентификатор', 
          name: 'Название', 
          price: 'Стоимость', 
          quantity: 'Количество' },
        [ 1, 'iPhone 5', '400', 5 ],
        [ 2, 'XBOX', '300', 7 ],
        [ 2, 'XBOX', '300', 8 ] 
    ];
    
});


