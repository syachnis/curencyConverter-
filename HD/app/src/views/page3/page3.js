/**
 * Created by syachnis on 17-02-05.
 */

app.controller('page3', [ '$scope', '$http' , '$mdDialog'   , function ($scope , $http , $mdDialog ){

    $scope.result = 0;
    $scope.base = 0;
    $scope.baseToUsdCof = 1 ;
    $scope.UsdToResCof = 0 ;
    $scope.selectedCurrency = { id: 1, name: 'USD' };
    $scope.selectedResCurrency = { id: 2, name: 'EUR' };

    $scope.currencys= [
        { id: 1, name: 'USD' },
        { id: 2, name: 'EUR' },
        { id: 3, name: 'CAD' }
    ];

    $http.get('http://api.fixer.io/latest?base=USD')
        .then(function (response) {
            $scope.responseData = response.data;
            if($scope.responseData.rates) {
                $scope.responseData.rates.USD = 1;
                if($scope.responseData.rates.EUR) {
                    $scope.UsdToResCof = $scope.responseData.rates.EUR
                }
            }
            console.log($scope.responseData);
        }, function (error) {
            alert("No Data ")
        });




    $scope.updateBaseToUSD = function()
    {
        var curName = $scope.selectedCurrency.name;
        var rates = $scope.responseData.rates;
        if(rates[curName]) {
            $scope.baseToUsdCof = 1/rates[curName];
            $scope.convertCurrency();
        }
    }

    $scope.updateUSDToRes = function()
    {
        var curName = $scope.selectedResCurrency.name;
        var rates = $scope.responseData.rates;
        if(rates[curName]) {
            $scope.UsdToResCof = rates[curName];
            $scope.convertCurrency();
        }
    }



    $scope.convertCurrency = function() {
        $scope.result  =  $scope.base *  $scope.baseToUsdCof * $scope.UsdToResCof;
        $scope.result  =  Math.round($scope.result * 100)/100;
    };

    $scope.unConvertCurrency = function() {
        $scope.base  =  $scope.result / ($scope.UsdToResCof * $scope.baseToUsdCof) ;
        $scope.base   =  Math.round( $scope.base * 100)/100;
    };


    $scope.disclaimer = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: './src/views/page3/disclaimerDialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
            .then(function(answer) {
                $scope.status = '';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
    };

    function getCof(curencyName)
    {
        return 1;
    }


    function DialogController($scope, $mdDialog) {

        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.cancel = function() {
            $mdDialog.cancel();
        };}
} ]);




