/**
 * Created by asif on 8/22/2015.
 */
    //var results = 0;
var quizApp = angular.module('quizApp',['ui.router','ngMaterial' ]);

quizApp.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('login',{
        url : '/login',
        templateUrl :'views/login.html',
            controller : 'loginCtrl'
        })
        .state('signup',{
            url : '/signup',
            templateUrl :'views/signup.html',
            controller :'signupCtrl'
        })
        .state('home',{
            url : '/home',
            templateUrl :'views/home.html',
            controller :'homeCtrl as demo'
        })
        .state('quiz',{
            url : '/quiz',
            templateUrl :'views/quiz.html',
            controller :'quizCtrl as demo'
        })
        .state('result',{
            url : '/result',
            templateUrl :'views/result.html',
            controller :'resultCtrl as demo'
        })
        .state('quizList',{
            url : '/quizList',
            templateUrl :'views/quizList.html',
            controller :'quizListCtrl as demo'
        })
        .state('reports',{
            url : '/reports',
            templateUrl :'views/reports.html',
            controller :'reportsCtrl as demo'
        })
        .state('admin_home',{
            url : '/admin_home',
            templateUrl :'views/admin_home.html',
            controller :'admin_homeCtrl as demo'
        })
        .state('add-question',{
            url : '/add-question',
            templateUrl :'views/add-question.html',
            controller :'add-question as demo'
        })

});
quizApp.run(function($rootScope, $http) {
    $rootScope.getCourseData = function(){
        $http.get('dashboard/addCourse')
            .success(function(data){
                console.log(data);
                $rootScope.CourseData = data;
                console.log($rootScope.CourseData);
                console.log('ok');
                //$scope.addCourse = {};
            })
            .error(function(err){
                console.log(err);
            });
    };
    $rootScope.getCourseData();
    });
quizApp.filter('capitalize', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }

});


