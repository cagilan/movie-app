import { MovieService } from '../services/movie.services';
export class SearchPageController implements ng.IController {
    static $inject = ['movieService'];
    public searchedMovieList: any;
    constructor(public movieService: MovieService) {
    }
    getMovie = (movieName): void => {
        let that = this;
        if (movieName) {
            that.movieService.getMovie(movieName).then((data) => {
                that.searchedMovieList = [data.data];
            });
        }
    }
    $onInit = (): void => {
        this.getMovie('batman');
    }
}

export class SearchComponent implements ng.IComponentOptions {
    static NAME: string = 'searchView';
    controller: any;
    templateUrl: any;
    constructor() {
        this.controller = SearchPageController;
        this.templateUrl = require('./searchpage.html');
    }
}
