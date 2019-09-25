import * as angular from 'angular';
import 'angular-mocks/ngMock';
import { FeaturedPageController } from './featuredpage.component';
describe('featured page component', () => {
    let controller: FeaturedPageController;
    let $componentController: angular.IComponentControllerService;
    let $rootScope: angular.IRootScopeService;
    let $q;
    const MovieService = jasmine.createSpyObj('app', ['getAllMovies']);

    const stub = {'Title':'Batman','Year':'1989','Rated':'PG-13','Released':'23 Jun 1989','Runtime':'126 min','Genre':'Action, Adventure','Director':'Tim Burton','Writer':'Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)','Actors':'Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl','Plot':'The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.','Language':'English, French, Spanish','Country':'USA, UK','Awards':'Won 1 Oscar. Another 8 wins & 26 nominations.','Poster':'https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg','Ratings':[{'Source':'Internet Movie Database','Value':'7.6/10'},{'Source':'Rotten Tomatoes','Value':'72%'},{'Source':'Metacritic','Value':'69/100'}],'Metascore':'69','imdbRating':'7.6','imdbVotes':'303,988','imdbID':'tt0096895','Type':'movie','DVD':'25 Mar 1997','BoxOffice':'N/A','Production':'Warner Bros. Pictures','Website':'N/A','Response':'True'};
    beforeEach(() => {
        angular.mock.module('app', ($provide) => {
            $provide.value('app', MovieService);
        });
        beforeEach(inject(($controller, $q) => {
            controller = $controller('controller', {
                service: MovieService
            });
        }));

        function createController(): FeaturedPageController {
            return $componentController('app', { $scope: $rootScope.$new() }, {}) as FeaturedPageController;
        }
        it('should get data from service', () => {
            const ctrl = createController();
            $rootScope.$apply();
            expect(ctrl.movieList).toEqual(stub);
        });
    });
});
