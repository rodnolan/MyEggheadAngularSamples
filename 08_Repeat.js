var myApp = angular.module("myApp", []);
myApp.factory("Avengers", function(){
	var Avngrs = {};
	Avngrs.cast = [
		"Rodney",
		"Angela",
		"Jeremy",
		"Ripley",
		"Finn",
		"Jacob",
		"Adriana",
		"Ryan",
		"Deanne",
		"Dean"
	]
	
	Avngrs.cast1 = [
		{
			name: "Rodney David Nolan",
			character: "The Grumpy Ol' Bug",
			nickname: "Zeus"
		}, 
		{
			name: "Angela Renee Walsh-Nolan",
			character: "The Hottest Mama Ever",
			nickname: "Helen"
		}, 
		{
			name: "Jeremy Fraser Nolan",
			character: "The Flying Canadian",
			nickname: "Blather Bug"
		}, 
		{
			name: "Ripley Maya Marie Nolan",
			character: "Saucy The Smurf",
			nickname: "Blither Bug"
		}, 
		{
			name: "Finn Mekai Kyle Nolan",
			character: "Cutie Pie",
			nickname: "Jitter Bug"
		}, 
	];
	return Avngrs;
});


function AvengersCtrl($scope, Avengers) {
	$scope.avengers = Avengers;
}