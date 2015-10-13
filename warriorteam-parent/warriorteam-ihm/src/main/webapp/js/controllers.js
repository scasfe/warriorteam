'use strict';
/****************************************************************************
 *                      Declaration du module de controllers
 */
var warriorApp = angular.module('warriorApp.controllers', []);

/****************************************************************************
 *                      Controller Principal de l'application
 *                      		(masterContrloller)
 */
warriorApp.controller('masterContrloller', ['$scope', '$routeParams', function ($scope, $routeParams) {

	// Pour l'instant il ne fait rien
	

}]);

/*****************************************************************************
 * 						Controller de login
 * 							(loginCtrl)
 */
warriorApp.controller('loginCtrl', ['$scope', '$routeParams', 'loginService', '$location', function ($scope, $routeParams, loginService, $location) {
	// Test d'entree dans le controlleur
	alert('loginCtrl');
	
	// Fonction de test pour le menu du haut
	$scope.test = function(){
		alert("Home test");
	};
	
	// Fonction pour le carousel pour eviter le redirection par le routeProvider
	$scope.slide = function (dir) {
	//	alert("Carousel test : "+dir);
	    $('#carousel-example').carousel(dir);
	};
	
	// Fonction d'authentification
	$scope.auth = function(j_username, j_password){
		// Appel au service de login
		loginService.auth(j_username, j_password).then(
				function(data){
					alert("Data in return : "+data.data.ip);
//					if(data.data.ip != null){
					if(data.name != null){
						// Gestion du data utilisateur
						
						// Creation du cookie avec session
						
						// Redirection vers page accueil
						
						
						
						// Fermeture du modal
						//$("#myModal").modal('show');
						//$("#myModal").modal('hide');		
						
						$('#myModal').on('hidden.bs.modal', function () {
							$location.path("/accueil");
						});
					}
				},
				function(error){
					alert('Erreur authentification !');
					
					$("#myModal").modal('hide');
					$("#myModal").on('hidden.bs.modal', function () {
					    $location.path("/accueil");
					    $scope.$apply();
					});
					
//					$('#myModal').on('hidden.bs.modal', function () {
//						
//					});
				});
	};
	
	

}]);

/*******************************************************************************
 *						Controller d'accueil
 *							(accueilCtrl)
 */
warriorApp.controller('accueilCtrl', ['$scope', '$routeParams' ,'$location', function ($scope, $routeParams, $location) {
	
	alert('accueilCtrl');
	
	// User authentifie deja
	var user = $scope.user;
	if(user == null || !user.connected){
		
		$location.path("/login");
	}
	
	
	
}]);