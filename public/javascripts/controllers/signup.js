/**
 * Created by asif on 9/3/2015.
 */
quizApp.controller('signupCtrl',function($scope, $http, $rootScope){
    $scope.test1 = "test signup";
    $scope.user = {
        name:'',
        email:'',
        password:''
    };
    $scope.getData = function(){
        $http.get('/signup')
            .success(function(data){
                console.log(data);
                $rootScope.data = data;
                $scope.user = {};
            })
            .error(function(err){
                console.log(err);
            });
    };
    //var user =  $scope.user;

    $scope.send_data = function(){
        console.log($scope.user);
    $http.post('/signup',$scope.user)
        .success(function(data){
            console.log(data);
            //$rootScope.data = data;
            $scope.getData();

        })
        .error(function(err){
            console.log(err);
        })
    };
    $scope.getData();
});

