import { Component, OnInit } from '@angular/core';
import { ISearchResult } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-lista-movies',
  templateUrl: './lista-movies.component.html',
  styles: [
  ]
})
export class ListaMoviesComponent implements OnInit {


constructor(private moviesService:MovieService) { }

          public movies: ISearchResult;
          public moviesString = '';
          public moviesSearchString = '';

          public titulo: string = "";


  ngOnInit() {

    // this.moviesService.obterMoviesAPI()
    // .subscribe(
    //   result => {
    //     this.movies = result;
    //     this.moviesString = JSON.stringify(this.movies);
    //     this.moviesSearchString = JSON.stringify(this.movies.Search);
    //   },
    //   error => console.log(error)
    // )
  }


  pesquisarNome() {
    //alert(this.titulo);

    this.moviesService.obterMoviesAPIBySearch(this.titulo)
    .subscribe(
      result => {
        // if(result.Response) {
        // this.movies = result;
        // this.moviesString = JSON.stringify(this.movies);
        // this.moviesSearchString = JSON.stringify(this.movies.Search);
        // }else {
        //   this.movies = undefined;
        // }

        this.movies = result;
        this.moviesString = JSON.stringify(this.movies);
        this.moviesSearchString = JSON.stringify(this.movies.Search);
        
      },
      error => console.log(error)
    )
  }

  // testandoServico() {
  //   alert(JSON.stringify(this.titulo));
  // }


}
