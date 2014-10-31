(function() {
	var app = angular.module('myBook', ['ngRoute','directives', 'home', 'feed']);
	
	app.config(function($routeProvider) {
		$routeProvider
		.when('/', {
    		templateUrl: 'page-center.html'
    	})
		.when('/home', {
    		templateUrl: 'page-home.html',
			controller: 'homeController'
    	})
		.otherwise({ redirectTo: '/' });
	});
	
	app.controller('headerController', ['$location', function($location) {
	
		this.credential = {
			'username': 'admin',
			'password': 'admin',
			'signedin': false
		};
	
		this.images = {
			
		};
		
		this.strings = {
			'username': 'User Name',
			'username_required': 'Please enter the user name',
			'password': 'Password',
			'password_required': 'Please enter the password',
			'signin': 'Sign In',
			'signin_invalid': 'Please enter the valid credential'
		};
		
		this.login = {
			username: '',
			password: ''
		};
		
		this.validateUser = function() {
			if (this.login.username === this.credential.username
				&& this.login.username === this.credential.password) {
				this.credential.signedin = true;
				$location.path('/home');
			} else {
				
				var usernameFld = document.getElementById('username');
				var passwordFld = document.getElementById('password');
				usernameFld.classList.add('error');
				passwordFld.classList.add('error');
				usernameFld.setCustomValidity(this.strings.signin_invalid);
			}
		};
		
		this.signout = function() {
			this.credential.signedin = false;
			$location.path('/home');
		};
	}]);
})();