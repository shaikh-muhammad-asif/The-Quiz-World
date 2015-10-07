/**
 * Created by asif on 9/3/2015.
 */
quizApp.controller('admin_homeCtrl',function($scope, $mdDialog, $http, $rootScope){
    $scope.admin = "admin";
    //animations
    this.isOpen = false;
    this.selectedMode = 'md-scale';
    this.selectedDirection = 'right';
    $scope.courcetitle = 'Please select the course title.';
//radio input conditions data
    $scope.submit1 =function(){
        var x = $scope.addquestion1[0].value;
        if( x == '1'){

            $scope.addData.opt[0].value1 = '0';
            $scope.addData.opt[1].value2 = '2';
            $scope.addData.opt[2].value3 = '3';
            $scope.addData.opt[3].value4 = '4';

        }else if( x == '2'){
            $scope.addData.opt[1].value2 = '0';
            $scope.addData.opt[0].value1 = '1';
            $scope.addData.opt[2].value3 = '3';
            $scope.addData.opt[3].value4 = '4';

        }else if( x == '3'){
            $scope.addData.opt[2].value3 = '0';
            $scope.addData.opt[0].value1 = '1';
            $scope.addData.opt[1].value2 = '2';
            $scope.addData.opt[3].value4 = '4';

        }else if( x == '4'){
            $scope.addData.opt[3].value4 = '0';
            $scope.addData.opt[0].value1 = '1';
            $scope.addData.opt[1].value2 = '2';
            $scope.addData.opt[2].value3 = '3';

        }
    };
    $scope.submit =function(){
        var x = $scope.addquestion[0].value;
        if(x == '1'){

            $scope.addCourse.opt[0].value1 = '0';
            $scope.addCourse.opt[1].value2 = '2';
            $scope.addCourse.opt[2].value3 = '3';
            $scope.addCourse.opt[3].value4 = '4';

        }else if(x == '2'){
            $scope.addCourse.opt[1].value2 = '0';
            $scope.addCourse.opt[0].value1 = '1';
            $scope.addCourse.opt[2].value3 = '3';
            $scope.addCourse.opt[3].value4 = '4';

        }else if(x == '3'){
            $scope.addCourse.opt[2].value3 = '0';
            $scope.addCourse.opt[0].value1 = '1';
            $scope.addCourse.opt[1].value2 = '2';
            $scope.addCourse.opt[3].value4 = '4';

        }else if(x == '4'){
            $scope.addCourse.opt[3].value4 = '0';
            $scope.addCourse.opt[0].value1 = '1';
            $scope.addCourse.opt[1].value2 = '2';
            $scope.addCourse.opt[2].value3 = '3';

        }
    };

//compaire value
    $scope.addquestion =[{value :''}];
    $scope.addquestion1 =[{value :''}];

//input field data
    $scope.addCourse =
        {
            name : "",
            ques : "",
            opt : [{q1:"",value1:1},{q2:"",value2:2},{q3:"",value3:3},{q4:"",value4:4}]
        };
    $scope.addData =
        {   ques : "",
        _id : "",
        opt : [{q1:"",value1:1},{q2:"",value2:2},{q3:"",value3:3},{q4:"",value4:4}]
    };
    $scope.remove_C = {_id : "",_id1 : ""};
    $scope.remove_Q = {_idq : ""};
    //remove_Q._id$scope._id;

    //$scope.allData = [{name:"HTML",course:data1},{name:"CSS",course:data2},{name:"JAVASCRIPT",course:data3}];
    //var data1 = [
    //    {ques : "hello asif?",
    //        opt : [{q1:"a"},{q1:"a"},{q1:"a"},{q1:"a"}]
    //    },
    //    {ques : "who r u?",
    //        opt : [{q1:"b"},{q1:"b"},{q1:"b"},{q1:"b"}]
    //    },
    //    {ques : "where are u ?",
    //        opt : [{q1:"c"},{q1:"c"},{q1:"c"},{q1:"c"}]
    //    }
    //];
    //var data2 = [
    //    {ques : "hello asif?",
    //        opt : [{q1:"a"},{q1:"a"},{q1:"a"},{q1:"a"}]
    //    },
    //    {ques : "who r u?",
    //        opt : [{q1:"b"},{q1:"b"},{q1:"b"},{q1:"b"}]
    //    },
    //    {ques : "where are u ?",
    //        opt : [{q1:"c"},{q1:"c"},{q1:"c"},{q1:"c"}]
    //    }
    //];
    //var data3 = [
    //    {ques : "hello asif?",
    //        opt : [{q1:"a"},{q1:"a"},{q1:"a"},{q1:"a"}]
    //    },
    //    {ques : "who r u?",
    //        opt : [{q1:"b"},{q1:"b"},{q1:"b"},{q1:"b"}]
    //    },
    //    {ques : "where are u ?",
    //        opt : [{q1:"c"},{q1:"c"},{q1:"c"},{q1:"c"}]
    //    }
    //];
    $rootScope.getCourseData = function(){
        $http.get('dashboard/addCourse')
            .success(function(data){
                console.log(data);
                $rootScope.CourseData = data;
                console.log($rootScope.CourseData);
                //console.log('ok');
                //$scope.addCourse = {};
            })
            .error(function(err){
                console.log(err);
            });
    };
    $scope.submited = function(ev){
        if($scope.addquestion[0].value ==""){
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title("CHECK NOW !")
                    .content('Please check the anyone correct answer !')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('OK!')
                    .targetEvent(ev)

            );


        }else{
            console.log($scope.addCourse);
            $http.post('dashboard/addCourse',$scope.addCourse)
                .success(function(data){
                    //console.log(data);
                    $rootScope.CourseData = data;
                    $rootScope.getCourseData();
                })
                .error(function(err){
                    console.log(err);
                })
        }

    };
    $scope.submited1 = function(ev){
        if($scope.addquestion1[0].value ==""){
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title("CHECK NOW !")
                    .content('Please check the anyone correct answer !')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('OK!')
                    .targetEvent(ev)

            );


        }
        else{
            console.log("add quiz to server");
            console.log($scope.addData);
            $http.post('dashboard/addQuiz',$scope.addData)
                .success(function(data){
                    console.log(data);
                    //$rootScope.CourseData = data;
                    $rootScope.getCourseData();
                })
                .error(function(err){
                    console.log(err);
                })
        }

    };
    $scope.submited2 = function(){
        //alert($scope.remove_C._id);
        $http.post('dashboard/delete_C',$scope.remove_C)
            .success(function(data){
                console.log(data);
                $rootScope.getCourseData();
            })
            .error(function(err){
                console.log(err);
            })
    };
    $scope.submited3 = function(){
        alert($scope.remove_Q._id);
        $http.post('dashboard/delete_Q',$scope.remove_C)
            .success(function(data){
                console.log(data);
                $rootScope.getCourseData();
            })
            .error(function(err){
                console.log(err);
            })
    };

    $rootScope.getCourseData();

});
