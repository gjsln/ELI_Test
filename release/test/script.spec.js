describe('Main Controller test suite', function() {
	describe('Controller: employeeDataCtrl', function() {
		var $scope, $httpBackend, createController, $http, employeeDataSVC;
		
		beforeEach(angular.mock.module('SMApp'));

	    beforeEach(inject(function($controller, $rootScope, _$httpBackend_, employeeDataSVC, _$http_) {
	      $scope = $rootScope.$new();
	      $httpBackend = _$httpBackend_;
	      employeeDataSVC = employeeDataSVC;
	      $http = _$http_;

	      createController = function() {
	        return $controller('employeeDataCtrl', {
	          $scope: $scope
	        });
	      };
	    }));

	    afterEach(function() {
	      $httpBackend.verifyNoOutstandingExpectation();
	      $httpBackend.verifyNoOutstandingRequest();
	    });

	    it("Should GET all the Student Data", function() {
	    	$httpBackend.expectGET('http://localhost:8001/data/employeeTableData.json').respond(200);
			var succeeded;
			employeeDataSVC.retrieveFromData().then(function () {
				succeeded = true;
			});  
			createController();
			$httpBackend.flush();
			expect(succeeded).to.be.true;	      
			expect($scope.collectionData.length).toBe(8);
	    });
	});
});