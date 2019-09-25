export class MovieService {
  static $inject = ['$q', '$http'];
  static NAME: string = 'movieService';
  constructor(protected $q: ng.IQService, protected $http: ng.IHttpService) { }
  public getAllMovies(): angular.IHttpPromise<any> {
    return this.$http.get('http://www.omdbapi.com/?s=gold&page=2&apikey=88d43359');
  }
  public getMovie(movieName): angular.IHttpPromise<any> {
    return this.$http.get('http://www.omdbapi.com/?t=' + movieName + '&apikey=88d43359');
  }
}
