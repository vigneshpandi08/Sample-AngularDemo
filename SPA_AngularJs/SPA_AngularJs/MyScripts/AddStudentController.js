app.controller('AddStudentController', function ($scope, $location, SPACRUDService, ShareData) {
    //$scope.Id = 0;
    $scope.cars = [{ id: 1, name: 'Audi' }, { id: 2, name: 'BMW' }, { id: 3, name: 'Honda' }];
    $scope.Car = [];

    debugger;
    loadAllCityListsRecords();

    function loadAllCityListsRecords() {
        alert('Welcome');

        var promiseGetCityList = SPACRUDService.getcityLists();

        promiseGetCityList.then(function (response) {
            $scope.CityLists = response.data
            console.log($scope.CityLists);
        },
            function (errorPl) {
                debugger;
                $scope.error = errorPl;
            });
    }
     

    $scope.save = function () {
        debugger;
        var Student = {
         
            Name: $scope.Name,
            Email: $scope.Email,
            Class: $scope.Class,
            City: $scope.City,
            City1: $scope.City1.toString(),
            DOB: $scope.DOB,
            Gender: $scope.Gender,
            Mark: $scope.Mark,
            MobileNo: $scope.MobileNo,
            Resume: $scope.Resume,
            Car: $scope.Car.toString()
        };
        var promisePost = SPACRUDService.post(Student);

        promisePost.then(function (pl) {
            debugger;
            alert("Student Saved Successfully.");
        },
            function (errorPl) {
                $scope.error = 'failure loading Student', errorPl;
                alert("some error occured");
            });

    };

});  
    