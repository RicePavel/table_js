app.factory('dataService', function() {
    
    return {
      
        getTestData: function() {
            return [
                { id: 'Идентификатор', 
                  name: 'Название', 
                  price: 'Стоимость', 
                  quantity: 'Количество' },
                [ 1, 'iPhone 5', '400', 5 ],
                [ 2, 'XBOX', '300', 7 ],
                [ 2, 'XBOX', '300', 9 ] 
            ];
        },
        
        getDataSets: function() {
            return [{id: 1, name: 'Первый набор'}, 
                {id: 2, name: 'Второй набор'},
                {id: 3, name: 'Третий набор'}
            ];
        },
        
        getData: function(dataSetId) {
            var data = [];
            switch (dataSetId) {
                case 1:
                    data = [
                        { id: 'Идентификатор', 
                          name: 'Название', 
                          price: 'Стоимость', 
                          quantity: 'Количество' },
                        [ 1, 'iPhone 5', '400', 5 ],
                        [ 2, 'XBOX', '300', 7 ],
                        [ 2, 'XBOX', '300', 9 ] 
                    ];
                    break;
                case 2:
                    data = [
                        { name: 'Name', 
                          age: 'Age', 
                          nickname: 'Nickname', 
                          employee: 'Employee' },
                        [ 'John', 36, 'Pit', true ],
                        [ 'Bob', 34, '', false ],
                        [ 'Bill', 37, 'Pototo', true ] 
                    ];
                    break;
                case 3:
                    data = [
                        { id: 'Идентификатор', 
                          name: 'Название', 
                          price: 'Стоимость', 
                          quantity: 'Количество' },
                        [ 1, 'iPhone 5', '400', 5 ],
                        [ 2, 'XBOX', '300', 7 ],
                        [ 2, 'XBOX', '300', 9 ],
                        [ 2, 'XBOX', '300', 9 ],
                        [ 2, 'XBOX', '300', 9 ],
                        [ 2, 'XBOX', '300', 9 ],
                        [ 2, 'XBOX', '300', 10 ],
                        [ 2, 'XBOX', '300', 9 ],
                        [ 2, 'XBOX', '300', 9 ],
                        [ 2, 'XBOX', '300', 9 ]
                    ];
                    break;
            }
            return data;
        }
        
    };
    
});


