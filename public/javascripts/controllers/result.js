/**
 * Created by asif on 9/3/2015.
 */
quizApp.controller('resultCtrl',function($scope,$rootScope){
    //animation
    this.isOpen = false;
    this.selectedMode = 'md-scale';
    this.selectedDirection = 'right';
    //data
    var x = $rootScope.title[0].Course.length;
    $rootScope.result1 = Math.round(((results)*100)/x)

});
