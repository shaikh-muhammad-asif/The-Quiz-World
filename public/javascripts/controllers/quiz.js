/**
 * Created by asif on 9/3/2015.
 */
var results = 0;
quizApp.controller('quizCtrl',function($scope,$rootScope,$location){
    //animations
    this.isOpen = false;
    this.selectedMode = 'md-scale';
    this.selectedDirection = 'right';

    $scope.data = [];
    $scope.a = 1;
    $scope.b = 0;
    $scope.next = function(){
        $scope.a += 1;
        $scope.b += 1;
        console.log($rootScope.title[0].Course.length);
        var num = $rootScope.title[0].Course.length;
        if($scope.data.group1 == 0){
            results += 1;
            //results += Math.round(((1)*100)/num);
        }
        if($rootScope.title[0].Course.length+1 == $scope.a){
            console.log($rootScope.result1);
            $location.path('/result');
        }
        $scope.data.group1 = "";
    };
    console.log($rootScope.title[0].Title);
});
