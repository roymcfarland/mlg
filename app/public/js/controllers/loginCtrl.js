var loginCtrl = angular.module("loginCtrl", []);

loginCtrl.controller("loginController", function() {

	var vm = this;
	vm.testMessage = "Login";

	vm.doLogin = function() {
		console.log("*** hello from line 9 ****");
	};

});
