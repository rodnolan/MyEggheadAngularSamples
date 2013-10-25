var myApp = angular.module("myApp", []);
myApp.factory("Data", function(){
	return { 
		message: "this is from a service",
		filterMessage: "from a service too",
		filterMessageDeux: "also from a service"
	};
});

function ScopeMethods($scope, Data) {
	$scope.data = Data;

	$scope.reverseMessageFlexible = function (msg) {
		return msg.split("").reverse().join("");
		// this requires you to call a method in the view 
		// and that method is only available to this Ctrlr 
	}
}

function Filters($scope, Data) {
	$scope.data = Data;
}

function Filters2($scope, Data) {
	$scope.data = Data;
}

myApp.filter("reverseMessageFilter", function(){
	return function(text) {
		return text.split("").reverse().join("");
	}
	// this let's you just apply the filter and it's not 
	// limited to any specific controller
});



