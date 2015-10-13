'use strict'

var wtapp = angular.module('warriorApp.directives', []);

wtapp.directive('wtheaderDirective', [function(){
	var elementHeader = {
			restrict:'E',
			priority:99,
			transclude:true,
			templateUrl:'templates/directives/header.html'
	}
	return elementHeader;
}]);

wtapp.directive('wtaccueilDirective', [function(){
	var elementAccueil = {
			restrict:'E',
			priority:99,
			transclude:true,
			templateUrl:'templates/directives/accueil_part.html'
	}
	return elementAccueil;
}]);

wtapp.directive('wtloginDirective', [function(){
	var elementLogin = {
			restrict:'E',
			priority:99,
			transclude:true,
			templateUrl:'templates/directives/login.html'
	}
	return elementLogin;
}]);

wtapp.directive('wtuploadDirective', [function(){
	var elementUpload = {
			restrict:'E',
			priority:99,
			transclude:true,
			templateUrl:'templates/directives/upload.html'
	}
	return elementUpload;
}]);

wtapp.directive('wtcarouselDirective', [function(){
	var elementCarousel = {
			restrict:'E',
			priority:99,
			transclude:true,
			templateUrl:'templates/directives/carousel.html'
	}
	return elementCarousel;
}]);

wtapp.directive('wtcategoriesDirective', [function(){
	var elementCategories = {
			restrict:'E',
			priority:99,
			transclude:true,
			templateUrl:'templates/directives/categories.html'
	}
	return elementCategories;
}]);

wtapp.directive('wtcommentairesDirective', [function(){
	var elementCommentaires = {
			restrict:'E',
			priority:99,
			transclude:true,
			templateUrl:'templates/directives/commentaires.html'
	}
	return elementCommentaires;
}]);

wtapp.directive('wtfooterDirective', [function(){
	var elementFooter = {
			restrict:'E',
			priority:99,
			transclude:true,
			templateUrl:'templates/directives/footer.html'
	}
	return elementFooter;
}]);

wtapp.directive('wtmodalloginDirective', [function(){
	var elementFooter = {
			restrict:'E',
			priority:99,
			transclude:true,
			templateUrl:'templates/directives/modal_login.html'
	}
	return elementFooter;
}]);