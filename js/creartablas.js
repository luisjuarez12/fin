'use strict'

var app = angular.module('myApp', []);

app.controller('ControlGuardar', function ($scope, $http) {
	$scope.nomdb = '';
	$scope.nomt = '';

	$scope.postdata = function (nomdb, nomt) {
		var data = {
			nomdb: nomdb,
			nomt: nomt,
		};

		//Call the services
		$http.post('http://localhost/base/index.php/mostrartables/creart', JSON.stringify(data)).then(function (response) {
			if (response.data) {
				if(response.data.error == 'false') {
					$scope.nomdb = '';
	                $scope.nomt='';
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
	$http.get('http://localhost/base/index.php/mostrartables/mostrart').then(function (response) {
		console.log(response.data);
		if (response.data) {
			$scope.tables = response.data.tables;
		}
	}, 
	function (response) {
		$scope.message = response.data.error;
	});
});
app.controller('ControlBorrar', function ($scope, $http) {
	$scope.nomdb = '';
	$scope.nomt = '';

	$scope.postdata = function (nomdb, nomt) {
		var data = {
			nomdb: nomdb,
			nomt: nomt,
		};

		//Call the services
		$http.post('http://localhost/base/index.php/mostrartables/borrart', JSON.stringify(data)).then(function (response) {
			if (response.data) {
				if(response.data.error == 'false') {
					$scope.nomdb = '';
	                $scope.nomt='';
				}
				$scope.message = response.data.message;
			}
		}, 
		function (response) {
			$scope.message = response.data.message;
		});
	};
});
app.controller('ControlActualizar', function ($scope, $http) {
	$scope.nomdb = '';
	$scope.nomt = '';
	$scope.ren = '';

	$scope.putdata = function (nomdb, nomt, ren) {
		var data = {
			nomdb: nomdb,
			nomt: nomt,
			ren: ren,
		};

		//Call the services
		$http.put('http://localhost/base/index.php/mostrartables/actualizart', JSON.stringify(data)).then(function (response) {
			if (response.data) {
				if(response.data.error == 'false') {
					$scope.nomdb = '';
	                $scope.nomt='';
	                $scope.ren = '';
				}
				$scope.message = response.data.message;
			}
		}, 
		function (response) {
			$scope.message = response.data.message;
		});
	};
});
