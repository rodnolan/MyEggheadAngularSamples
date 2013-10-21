var myApp = angular.module("myApp", []);
myApp.factory("Data", function(){
	return { message: "this is from a service" };
});

function FirstCtrlr($scope, Data) {
	$scope.data = Data;
}

function SecondCtrlr($scope, Data) {
	$scope.data = Data; 	
}
