

angular.module("CurrencyApp").controller("CurrencyController",['$http', function($http) {

    $http.get('app/data/currencymap.json').
    then(function(response) {
            self.currencies = response.data;
        },
        function(response) {
            console.log("Erreur avec le statut Http : "+response.status);
        });

}]);