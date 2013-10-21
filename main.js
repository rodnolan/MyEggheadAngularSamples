var app = angular.module("superhero", []);

app.directive("superman", function(){
	return {
		restrict: "E",
		template: "<div>Here I am to save the day</div>"
	}
});
app.directive("spiderman", function(){
	return {
		restrict: "A",
		link: function(){
			console.log('this came from an attribute')
		}
	}
});
app.directive("batman", function(){
	return {
		restrict: "C",
		link: function(){
			console.log('this came from a class')
		}
	}
});
app.directive("comment", function(){
	return {
		restrict: "M",
		link: function(){
			console.log('this came from a comment')
		}
	}
});


app.directive("enter", function(){
	return {
		restrict: "A",
		link: function(scope, element, attrs) {
			element.bind("mouseenter", function() {
				console.log('mouse is hovering');
				element.addClass(attrs.enter)
			});
		}
	}
});

app.directive("leave", function(){
	return {
		restrict: "A",
		link: function(scope, element, attrs) {
			element.bind("mouseleave", function() {
				console.log('mouse is leaving and therefore removing the class ' + attrs.enter + ', ' + attrs.myname);
				element.removeClass(attrs.enter)

			});
		}
	}
});		
// var myApp = angular.module('myApp', []);

// myApp.factory('Data', function(){
// 	return {message:"I'm data from a service"};
// });

// // myApp.filter('reverse', function(Data){
// // 	return function (text) {
// // 		return text.length + " " + text.split("").reverse().join("");
// // 	}
// // });

// function FirstCtrl($scope, Data) {
// 	$scope.data = Data;
// }

// function SecondCtrl($scope, Data) {
// 	$scope.data = Data;

// 	$scope.reversedMessage = function (msg) {
// 		return msg.split("").reverse().join("");
// 	}
// }

// myApp.factory('Avengers', function(){

// 	var Avengers = {};
// 	Avengers.cast = [
// 		{name:"Finn Mekai Kyle Nolan", age:"07", gender:"male"},
// 		{name:"Angela Walsh-Nolan", age:"43", gender:"female"},
// 		{name:"Jeremy Fraser Nolan", age:"11", gender:"male"},
// 		{name:"Rodney David Nolan", age:"40", gender:"male"},
// 		{name:"Ripley Maya Marie Nolan", age:"09", gender:"female"}
// 	];
// 	return Avengers;
// });

// function AvengersCtrl($scope, Avengers) {
// 	$scope.avengers = Avengers;
// }