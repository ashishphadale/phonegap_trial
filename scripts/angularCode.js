var addUserDetails = angular.module('userInformation',[]);

addUserDetails.controller('detailsController', function($scope){ 
	$scope.visible = false;
	$scope.info = [];
	$scope.userSearch = '';

	$scope.addUserInfo = function(){
		$scope.info.push({number:$scope.serialnumber, name:$scope.username,designation:$scope.designation});
		$scope.serialnumber = '';
		$scope.username = '';
		$scope.designation = '';
	}
	$scope.delete = function(details){
		var user = $scope.info.indexOf(user);
		$scope.info.splice(user,1);
	}
	

});


