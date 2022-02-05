import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';

import { MovieService } from './movies/movie.service';
import { PlataformasService } from './plataformas/plataformas.service';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { rootRouterConfig } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListaPlataformasComponent } from './plataformas/lista-plataformas/lista-plataformas.component';
import { ListaMoviesComponent } from './movies/lista-movies/lista-movies.component';
import { ContatoComponent } from './contato/contato.component';



@NgModule({
  declarations: [
    //COMPONENTES - Component
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    ListaPlataformasComponent,
    ListaMoviesComponent,
    ContatoComponent
  ],
  imports: [
    //MODULOS - NgModule
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })] //Rotas
    
  ],
  providers: [
    //SERVIÇOS - Injectable
    MovieService,
    PlataformasService,
    { provide: APP_BASE_HREF, useValue: '' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


