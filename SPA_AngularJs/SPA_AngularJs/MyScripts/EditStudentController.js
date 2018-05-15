app.controller("EditStudentController", function ($scope, $location, ShareData, SPACRUDService) {
    debugger;
    loadAllCityListsRecords();

    function loadAllCityListsRecords() {
        alert('Welcome to edit');
       
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
    getStudent();

    function getStudent() {
        debugger;
        var promiseGetStudent = SPACRUDService.getStudent(ShareData.value);

        promiseGetStudent.then(function (pl) {
            $scope.Student = pl.data;
            //$scope.Student.city = "3";
        },
            function (errorPl) {
                $scope.error = 'failure loading Student', errorPl;
            });
    }
    

    $scope.save = function () {
        debugger;
        var Student = {
            StudentID: $scope.Student.studentID,
            Name: $scope.Student.name,
            Email: $scope.Student.email,
            Class: $scope.Student.class,
            City: $scope.Student.city,
            City1: $scope.Student.city1.toString(),
            DOB: $scope.Student.dob,
            Gender: $scope.Student.gender,
            Mark: $scope.Student.mark,
            MobileNo: $scope.Student.MobileNo,
            Resume: $scope.Student.Resume
        };

        var promisePutStudent = SPACRUDService.put($scope.Student.studentID, Student);
        promisePutStudent.then(function (pl) {
            alert("Saved Successfully.");
            $location.path("/showstudents");
        },
            function (errorPl) {
                $scope.error = 'failure loading Student', errorPl;
            });
    };

});  