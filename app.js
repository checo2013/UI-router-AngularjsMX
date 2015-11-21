"use strict"

angular.module('app',['ui.router','ngAnimate'])
.config(['$stateProvider', '$urlRouterProvider', config]);


function config($stateProvider,$urlRouterProvider){

	$urlRouterProvider.otherwise("/login");

	$stateProvider

	.state('login', {
		url: "/login",
		templateUrl: "views/login.html"
	})

	.state('index', {
		url: "/",
		templateUrl: "views/home.html"
		/*
		controller:'homeCtrl',
		controllerAs: "home",
		resolve:{
        }
		*/
	})

	.state('index.vistas', {
		url: "/vistas",
		views: {

            // la vista principal
            '': { templateUrl: 'views/vistas.html' },

            // vista1
            'columnaUno@index.vistas': { template: 'Mirame soy una columna' /* , controller:columnaUnoCtrl   */ },

            // vista2
            'columnaDos@index.vistas': { template: 'Mirame soy otra columna' }
        }
	})

	.state('wizard', {
		url: "/wizard",
		templateUrl: "views/wizard.html",
		controller: function($state){
			$state.go('wizard.paso1');
		}
	})

	.state('wizard.paso1', {
        url: '/paso1',
        templateUrl: 'views/paso1.html'
    })
    

    .state('wizard.paso2', {
        url: '/paso2',
        templateUrl: 'views/paso2.html'
    })
    

    .state('wizard.paso3', {
        url: '/paso3',
        templateUrl: 'views/paso3.html'
    });


}



function miControlador ($state){
	$state.go('mi.ruta');
}






