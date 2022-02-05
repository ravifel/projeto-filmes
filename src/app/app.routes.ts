import { Routes } from "@angular/router";
import { ContatoComponent } from "./contato/contato.component";
import { ListaMoviesComponent } from "./movies/lista-movies/lista-movies.component";

import { HomeComponent } from "./navegacao/home/home.component";
import { ListaPlataformasComponent } from "./plataformas/lista-plataformas/lista-plataformas.component";

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'movies', component: ListaMoviesComponent},
    { path: 'plataformas', component: ListaPlataformasComponent },
    { path: 'contato', component: ContatoComponent }
]