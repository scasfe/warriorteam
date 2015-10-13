'use strict'

var warapp = angular.module('warriorApp.services', []).value('version', '0.1');

/************************************************************
/*			Service authentification
/*				(loginService)
*/
warapp.service('loginService', ['$http', '$rootScope', function ($http, $rootScope){
	
	/********************************************************
	 *       Methode de authentification REST
	 *       (auth)
	 */
	this.auth = function(j_username, j_password){
		// Definition de la variable globale user
		// TODO fixme remplacer variable globale rootScope par scope
		var data = $rootScope.user = [{
			
			name: j_username,
			age: 23
		}];
		
		// Appel du serveur
		var promise=$http(
				{
					method : 'GET',
					url : 'http://ip.jsontest.com/'
				}
			)
			.success(function(data, status, headers, config){
				alert(data.ip);
				return data;
			})
			.error(function(data, status, headers, config){
				alert('Une erreur est survenue !');
		});
		return promise;
		
	}
}])