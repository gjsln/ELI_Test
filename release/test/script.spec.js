describe('Main Controller test suite', function() {
	describe('Controller: employeeDataCtrl', function() {
		var $scope, $httpBackend, createController, $http, employeeDataSVC;
		
		beforeEach(module('SMApp'));

	    beforeEach(inject(function($controller, $rootScope, $httpBackend, employeeDataSVC, $http) {
	      $scope = $rootScope.$new();
	      $httpBackend = $httpBackend;
	      employeeDataSVC = employeeDataSVC;
	      $http = $http;

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
	    	$httpBackend.expectGET('/data/employeeTableData.json').respond(200);
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