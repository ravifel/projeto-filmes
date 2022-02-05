import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ISearchResult, Movie } from "./movie";


@Injectable({
  providedIn: 'root'
})
export class MovieService {


    // protected UrlService: string = "https://www.omdbapi.com/?apikey=d5a00d34&s=Harry%20Potter&";

    protected UrlServiceSearch: string = "https://www.omdbapi.com/?apikey=d5a00d34&s=";

constructor(private http: HttpClient) { }

      //Metodo que vai retornar uma lista de Movies
    //   obterMovies() : Observable<Movie[]> {
    //     return this.http
    //     .get<Movie[]>(this.UrlService);
    // }

    // obterMoviesAPI(): Observable<ISearchResult> {
    //   return this.http
    //   .get<ISearchResult>(this.UrlService);
    // }

    obterMoviesAPIBySearch(filme: string): Observable<ISearchResult> {
      return this.http
      .get<ISearchResult>(this.UrlServiceSearch + filme);
    }

    // obterMovies2(): any[] {
    // return  [
    //     {
    //       "Title": "Spider-Man",
    //       "Year": "2002",
    //       "imdbID": "tt0145487",
    //       "Type": "movie",
    //       "Poster": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
    //     },
    //     {
    //       "Title": "The Amazing Spider-Man",
    //       "Year": "2012",
    //       "imdbID": "tt0948470",
    //       "Type": "movie",
    //       "Poster": "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg"
    //     },
    //     {
    //       "Title": "Spider-Man 2",
    //       "Year": "2004",
    //       "imdbID": "tt0316654",
    //       "Type": "movie",
    //       "Poster": "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    //     },
    //     {
    //       "Title": "Spider-Man: Homecoming",
    //       "Year": "2017",
    //       "imdbID": "tt2250912",
    //       "Type": "movie",
    //       "Poster": "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg"
    //     },
    //     {
    //       "Title": "Spider-Man 3",
    //       "Year": "2007",
    //       "imdbID": "tt0413300",
    //       "Type": "movie",
    //       "Poster": "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
    //     },
    //     {
    //       "Title": "Spider-Man: Into the Spider-Verse",
    //       "Year": "2018",
    //       "imdbID": "tt4633694",
    //       "Type": "movie",
    //       "Poster": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg"
    //     }];
    // }

    // testandoServico() {
    //   alert("Funcionando")
    // }

}