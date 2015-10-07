/**
 * Created by asif on 9/4/2015.
 */
quizApp.controller('add-question',function($scope,$mdDialog){
    //animations
    this.isOpen = false;
    this.selectedMode = 'md-scale';
    this.selectedDirection = 'right';

    $scope.addquestion =[{value :''}];

    $scope.addData = [
        {   ques : "",
            _id : "",
            opt : [{q1:"",value:1},{q1:"",value:2},{q1:"",value:3},{q1:"",value:4}]
        }
        ];

    $scope.submit =function(){
        if($scope.addquestion[0].value == '1'){

            $scope.addData[0].opt[0].value = '0';
            $scope.addData[0].opt[1].value = '2';
            $scope.addData[0].opt[2].value = '3';
            $scope.addData[0].opt[3].value = '4';

        }else if($scope.addquestion[0].value == '2'){
            $scope.addData[0].opt[1].value = '0';
            $scope.addData[0].opt[0].value = '1';
            $scope.addData[0].opt[2].value = '3';
            $scope.addData[0].opt[3].value = '4';

        }else if($scope.addquestion[0].value == '3'){
            $scope.addData[0].opt[2].value = '0';
            $scope.addData[0].opt[0].value = '1';
            $scope.addData[0].opt[1].value = '2';
            $scope.addData[0].opt[3].value = '4';

        }else if($scope.addquestion[0].value == '4'){
            $scope.addData[0].opt[3].value = '0';
            $scope.addData[0].opt[0].value = '1';
            $scope.addData[0].opt[1].value = '2';
            $scope.addData[0].opt[2].value = '3';

        }
    };
    //console.log($scope.addData.opt[1].q1);




    $scope.allData = [{name:"HTML",course:data1},{name:"CSS",course:data2},{name:"JAVASCRIPT",course:data3}];
    var data1 = [
        {ques : "hello asif?",
            opt : [{q1:"a"},{q1:"a"},{q1:"a"},{q1:"a"}]
        },
        {ques : "who r u?",
            opt : [{q1:"b"},{q1:"b"},{q1:"b"},{q1:"b"}]
        },
        {ques : "where are u ?",
            opt : [{q1:"c"},{q1:"c"},{q1:"c"},{q1:"c"}]
        }
    ];
    var data2 = [
        {ques : "hello asif?",
            opt : [{q1:"a"},{q1:"a"},{q1:"a"},{q1:"a"}]
        },
        {ques : "who r u?",
            opt : [{q1:"b"},{q1:"b"},{q1:"b"},{q1:"b"}]
        },
        {ques : "where are u ?",
            opt : [{q1:"c"},{q1:"c"},{q1:"c"},{q1:"c"}]
        }
    ];
    var data3 = [
        {ques : "hello asif?",
            opt : [{q1:"a"},{q1:"a"},{q1:"a"},{q1:"a"}]
        },
        {ques : "who r u?",
            opt : [{q1:"b"},{q1:"b"},{q1:"b"},{q1:"b"}]
        },
        {ques : "where are u ?",
            opt : [{q1:"c"},{q1:"c"},{q1:"c"},{q1:"c"}]
        }
    ];

$scope.courcetitle = 'Please select the course title.';

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


        }

    };

});

