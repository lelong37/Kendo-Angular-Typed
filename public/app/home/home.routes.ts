((): void => {

    "use strict";

    angular
        .module("app.home")
        .config(config);

    function config(
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider): void {
 
        $urlRouterProvider.otherwise("/")
 
        $stateProvider
            .state("/", {
                url: "/",
                templateUrl: "/app/home/views/index.html",
                controller: "app.home.IIndexController",
                controllerAs: "vm"
            })
            .state("/home/contact", {
                url: "/contact",
                templateUrl: "/app/home/views/contact.html",
                controller: "app.home.IContactController",
                controllerAs: "vm"
            })
            .state("/home/about", {
                url: "/about",
                templateUrl: "/app/home/views/about.html",
                controller: "app.home.IAboutController",
                controllerAs: "vm"
            })
            
    }
})();
