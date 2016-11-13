'use strict';

describe('Main Controller test suite', function() {
	describe('Controller: employeeDataCtrl', function() {
		var $scope, $httpBackend, createController, $http;
		
		beforeEach(module('SMApp'));

	    beforeEach(inject(function($controller, $rootScope, _$httpBackend_, _$http_) {
	      $scope = $rootScope.$new();
	      $httpBackend = _$httpBackend_;
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

	    it("should GET all the Student Data", function() {
	      $httpBackend.expectGET('/data/employeeTableData.json').respond(200, [{}, {}, {}]);
	      createController();
	      $httpBackend.flush();
	      expect($scope.collectionData.length).toBe(8);
	    });
	});
});