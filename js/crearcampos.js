'use strict'

var app = angular.module('myApp', []);

app.controller('ControlGuardar', function ($scope, $http) {
	$scope.nombre = '';

	$scope.postdata = function (first_name, last_name) {
		var data = {
			first_name: first_name,
			last_name: last_name
		};

		//Call the services
		$http.post('http://localhost/base/index.php/mostrarcampos/crearc', JSON.stringify(data)).then(function (response) {
			if (response.data) {
				if(response.data.error == 'false') {
					$scope.first_name = '';
					$scope.last_name = '';
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
	$http.get('http://localhost/base/index.php/mostrarcampos/listarc').then(function (response) {
		console.log(response.data);
		if (response.data) {
			$scope.actores = response.data.actores;
		}
	}, 
	function (response) {
		$scope.message = response.data.error;
	});
});
app.controller('ControlBorrar', function ($scope, $http) {
	$scope.nombre = '';

	$scope.postdata = function (actor_id) {
		var data = {
			actor_id: actor_id,
			
		};

		//Call the services
		$http.post('http://localhost/base/index.php/mostrarcampos/borrarc', JSON.stringify(data)).then(function (response) {
			console.log(response.data);
			if (response.data) {
				if(response.data.error == 'false') {
					$scope.actor_id = '';
					
				}
				$scope.message = response.data.message;
			}
		}, 
		function (response) {
			$scope.message = response.data.message;
		});
	};
});
app.controller('ControlEditar', function ($scope, $http) {
	$scope.nombre = '';

	$scope.putdata = function (first_name, last_name) {
		var data = {
			first_name: first_name,
			last_name: last_name
		};

		//Call the services
		$http.put('http://localhost/base/index.php/mostrarcampos/editarc', JSON.stringify(data)).then(function (response) {
			if (response.data) {
				if(response.data.error == 'false') {
					$scope.first_name = '';
					$scope.last_name = '';
				}
				$scope.message = response.data.message;
			}
		}, 
		function (response) {
			$scope.message = response.data.message;
		});
	};
});