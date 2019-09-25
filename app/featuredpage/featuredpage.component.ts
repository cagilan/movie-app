import { MovieService } from '../services/movie.services';

export class FeaturedPageController implements ng.IController {
      static $inject = ['movieService','$state'];
      public movieList: any;
      public pageSize: number;
        constructor(public movieService:MovieService, public $state:ng.ui.IStateService) {
            this.pageSize = 10;
           this.movieService.getAllMovies().then((data)=> {
               this.movieList = data.data;
          });
    }
}

export class FeaturedComponent implements ng.IComponentOptions {
    static NAME:string = 'featuredView';
    controller:any;
    templateUrl:any;
    constructor() {
       this.controller = FeaturedPageController;
       this.templateUrl = require('./featuredpage.html');
    }
}
