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
					alert("Data in return : "+data.data[0].employeeName);
					if(data.data[0].employeeName != null){
						// Gestion du data utilisateur
						
						// Creation du cookie avec session
						
						// Fermeture du modal
						// et Redirection vers page accueil
						$("#myModal").modal('hide');
						$("#myModal").on('hidden.bs.modal', function () {
						    $location.path("/accueil");
						    $scope.$apply();
						});
					}
				},
				function(error){
					alert('Erreur authentification !');
				});
	};
	
	// Fonction de controle du formulaire de login
	$scope.save = function() {
	    $scope.$broadcast('show-errors-check-validity');
	    
	    if ($scope.userForm.$valid) {
	      // Appel au login
	    	this.auth('user','pwd');
	    } else {
	      alert("There are invalid fields");
	    }
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