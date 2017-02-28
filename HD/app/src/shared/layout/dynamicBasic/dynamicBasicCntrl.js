/**
 * Created by syachnis on 17-02-09.
 */
app.controller('dynamicBasicCntrl',  function ($scope , $mdSidenav ) {
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
});
