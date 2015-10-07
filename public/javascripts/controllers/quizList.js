/**
 * Created by asif on 9/3/2015.
 */
quizApp.controller('quizListCtrl',function($scope, $rootScope, $location){
    //animations
    this.isOpen = false;
    this.selectedMode = 'md-scale';
    this.selectedDirection = 'right';
    //$rootScope.title = [];
    $scope.select = function(a){
        $scope.tit =$rootScope.CourseData.slice(a,a+1);
        console.log($scope.tit);
        $rootScope.title = $scope.tit;
        $scope.shuffle1($scope.title[0].Course);
        $location.path('/quiz');
    };
    $scope.shuffle1 = function(o){
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

});

