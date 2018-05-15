﻿app.controller("DeleteStudentController", function ($scope, $location, ShareData, SPACRUDService) {

    getStudent();
    function getStudent() {

        var promiseGetStudent = SPACRUDService.getStudent(ShareData.value);


        promiseGetStudent.then(function (pl) {
            $scope.Students = pl.data;
        },
            function (errorPl) {
                $scope.error = 'failure loading Student', errorPl;
            });
    }

    $scope.delete = function () {
        var promiseDeleteStudent = SPACRUDService.delete(ShareData.value);

        promiseDeleteStudent.then(function (pl) {
            alert("Deleted Successfully.");
            $location.path("/showstudents");
        },
            function (errorPl) {
                $scope.error = 'failure loading Student', errorPl;
            });
    };

});  