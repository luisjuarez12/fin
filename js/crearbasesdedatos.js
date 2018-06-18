'use strict'

var app = angular.module('myApp', []);

app.controller('ControlGuardar', function ($scope, $http) {
	$scope.nombre = '';

	$scope.postdata = function (nombre) {
		var data = {
			nombre: nombre,
		};

		//Call the services
		$http.post('http://localhost/base/index.php/mostrardb/creardatabase', JSON.stringify(data)).then(function (response) {
			if (response.data) {
				if(response.data.error == 'false') {
					$scope.nombre = '';
				}
				$scope.message = response.data.message;
			}
		}, 
		function (response) {
			$scope.message = response.data.message;
		});
	};
});

app.controller('ControlListar', function ($scope, $http) {
	//Call the services
	$http.get('http://localhost/base/index.php/mostrardb/mostrard').then(function (response) {
		if (response.data) {
			$scope.databases = response.data.databases;
		}
	}, 
	function (response) {
		$scope.message = response.data.error;
	});
});
app.controller('ControlBorrar', function ($scope, $http) {
	$scope.nombre = '';

	$scope.postdata = function (nombre) {
		var data = {
			nombre: nombre,
		};

		//Call the services
		$http.post('http://localhost/base/index.php/mostrardb/borrardb', JSON.stringify(data)).then(function (response) {
			if (response.data) {
				if(response.data.error == 'false') {
					$scope.nombre = '';
				}
				$scope.message = response.data.message;
			}
		}, 
		function (response) {
			$scope.message = response.data.message;
		});
	};
});