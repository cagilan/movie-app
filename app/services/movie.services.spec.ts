import * as angular from 'angular';
import 'angular-mocks';
import { MovieService } from './movie.services';

describe('MovieService', () => {

    let MovieService = {
        getAllMovies(): void {

        },
        getMovie(): void {

        }
    };
    let $http: ng.IHttpBackendService;
    const httpMock = {
        get(): any {
            return {
                then(): any {
                    // ignore this
                }
            };
        }
    };

    beforeEach(() => {
        angular.mock.module('app', ($provide) => {
            $provide.value('$http', httpMock);
        });

        inject(($injector) => {
            $http = $injector.get('$http');
        });
    });

    it('should get message', () => {
        spyOn(MovieService, 'getAllMovies').and.callThrough();
        MovieService.getAllMovies();
        expect(MovieService.getAllMovies).toHaveBeenCalled();
    });
    it('should get message', () => {
        spyOn(MovieService, 'getMovie').and.callThrough();
        MovieService.getMovie();
        expect(MovieService.getMovie).toHaveBeenCalled();
    });
});
