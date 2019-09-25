// app.ts
import { module, element, bootstrap, ILogService } from 'angular';
import '@uirouter/angularjs';
import { AppComponent } from '../app/app.component';
import { SearchComponent } from '../app/searchpage/searchpage.component';
import { FeaturedComponent } from '../app/featuredpage/featuredpage.component';
import { MovieService } from '../app/services/movie.services';
import './app.less';

export let app = module('app', [
    'ui.router'
])
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        $stateProvider.state({
            name: 'app',
            url: '/app',
            component: AppComponent.NAME
        }).state(
            {
                name: 'app.searchpage',
                url: '/searchpage',
                component: SearchComponent.NAME
            }).state(
            {
                name: 'app.featuredpage',
                url: '/featuredpage',
                component: FeaturedComponent.NAME,
            });

        $urlRouterProvider.otherwise('/app');
    }])
    .component(AppComponent.NAME, new AppComponent())
    .component(SearchComponent.NAME, new SearchComponent())
    .component(FeaturedComponent.NAME, new FeaturedComponent())
    .service(MovieService.NAME, MovieService);
element(document).ready(() => {
    bootstrap(document, ['app']);
});
