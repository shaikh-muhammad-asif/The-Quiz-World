/**
 * Created by asif on 9/2/2015.
 */
quizApp.controller('loginCtrl',function($scope, $http, $location, $rootScope){
    $scope.test = "test";
    $scope.loginData = {email : '', password : ''};
    $scope.sendData = function(){
        $http.post('/login',$scope.loginData)
            .success(function(data){
                console.log(data);
                $rootScope.abc = data;
                $scope.loginData = {};
                if('admin' === data){
                    $location.path('/admin_home');
                }else{
                    console.log(data);
                if(data){
                    $location.path('/home');
                }
                }
            })
            .error(function(err){
                console.log(err);
            })
    }
});
