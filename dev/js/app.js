var appConfig = {appResourceUrl: '/'};

angular.module('SMApp', 
	['ui.router',
	 'ngAnimate',
	 'ngSanitize',
	 'ui.bootstrap'
])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  var mainState = {
    name: 'mainMaster',
    url: '/',
    templateUrl: '../mainMaster.html',
    controller: 'employeeDataCtrl'
  };

  $stateProvider.state(mainState);
})

.controller('employeeDataCtrl',['$scope', '$log', 'employeeDataSVC', function($scope,$log,employeeDataSVC) {
  //$scope.collectionData = [];

    employeeDataSVC.retrieveFromData().success(function (response) {
      $scope.collectionData = response.empData;
    });
}])

.factory('employeeDataSVC', ['$http', '$log', function($http,$log){
    var serviceAPI = {};

    serviceAPI.retrieveFromData = retrieveFromData;

    function retrieveFromData(){
      return $http.get('/data/employeeTableData.json');
    }

    return serviceAPI;
}]);