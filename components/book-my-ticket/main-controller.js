/**
 * Created by Pravin on 10/9/2016.
 */
export default function mainController($scope, $http, myService) {
    'ngInject';

     $scope.pass = [];
    $scope.addinfo = function (info) {
        $scope.pass.push();
        myService.setData($scope.pass);

        var show = myService.getData();
        $scope.frstName = show[0].frstName;

        $scope.mailContent = show;
    };

    $scope.countries = ['Alberta', 'British Columbia', 'Ontario', 'California', 'Florida', 
        'New York', 'Toronto', 'Hamilton', 'Los Angeles', 'San Francisco'];

  
    // To validate date

      $scope.dateOptions = {
     dateDisabled: disabled,
     formatYear: 'yy',
     maxDate: new Date(2020, 5, 22),
     minDate: new Date(),
     startingDay: 1
     };
     $scope.open1 = function() {
     $scope.popup1.opened = true;
     };
     function disabled(data) {
     var date = data.date
     }

// To send an Email ----------

    $scope.send = function () {
        $http({
            method: 'GET',
            url: 'http://192.168.10.54:3006/postEmail?email=' + $scope.pass.email +
            '&fName=' + $scope.pass.frstName +
            '&lName=' + $scope.pass.lastName +
            '&location=' + $scope.pass.city +
            '&startdt=' + $scope.pass.ddt +
            '&returndt=' + $scope.pass.rdt +
            '&mobile=' + $scope.pass.phno
        })
        $scope.pass.frstName='';
        $scope.pass.lastName='';
        $scope.pass.phno='';
        $scope.pass.email='';
        $scope.pass.ddt='';
        $scope.pass.rdt='';
    };


}
