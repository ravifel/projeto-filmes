import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Plataforma } from "./plataforma";
import { Observable } from "rxjs";


@Injectable()
export class PlataformasService {

    constructor(private http: HttpClient){}

    protected UrlService: string = "http://localhost:3000/";

    obterPlataformas(): Observable<Plataforma[]> {
      return this.http
      .get<Plataforma[]>(this.UrlService + "plataformas");
    } 
}