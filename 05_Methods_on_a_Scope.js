var myApp = angular.module("myApp", []);
myApp.factory("Data", function(){
	return { message: "this is from a service" };
});

function FirstCtrlr($scope, Data) {
	$scope.data = Data;
	$scope.reverseMessageRigid = function () {
		return $scope.data.message.split("").reverse().join("");
		// this tightly couples the controller to the scope/model
	}
}

function SecondCtrlr($scope, Data) {
	$scope.data = Data;

	$scope.reverseMessageFlexible = function (msg) {
		return msg.split("").reverse().join("");
		// this way allows the view/scope to pass the data into the controller 
		// so they aren't tightly coupled
	}
}
