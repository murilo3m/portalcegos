angular.module('starter.controllers', [])

app.controller('ScrapsCtrl', function ($scope, Chats) {

    //ionic.material.ink.displayEffect();
    $scope.chats = Chats.all();
	$scope.remove = function(chat) {
		Chats.remove(chat);
	};
});