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

/**
* Directive pour l affichage des erreurs de remplissage
* du formulaire de Login
*/
wtapp.directive('showErrors', function($timeout) {
    return {
      restrict: 'A',
      require: '^form',
      link: function (scope, el, attrs, formCtrl) {
        // find the text box element, which has the 'name' attribute
        var inputEl   = el[0].querySelector("[name]");
        // convert the native text box element to an angular element
        var inputNgEl = angular.element(inputEl);
        // get the name on the text box
        var inputName = inputNgEl.attr('name');
        
        // only apply the has-error class after the user leaves the text box
        inputNgEl.bind('blur', function() {
          el.toggleClass('has-error', formCtrl[inputName].$invalid);
        });
        
        scope.$on('show-errors-check-validity', function() {
          el.toggleClass('has-error', formCtrl[inputName].$invalid);
        });
        
        scope.$on('show-errors-reset', function() {
          $timeout(function() {
            el.removeClass('has-error');
          }, 0, false);
        });
      }
    }
  });