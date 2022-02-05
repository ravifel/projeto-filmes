import { Component, OnInit } from '@angular/core';
import { Plataforma } from '../plataforma';
import { PlataformasService } from '../plataformas.service';

@Component({
  selector: 'app-lista-plataformas',
  templateUrl: './lista-plataformas.component.html',
  styles: [
  ]
})
export class ListaPlataformasComponent implements OnInit {

  constructor(private plataformasService: PlataformasService) { }

  public plataformas: Plataforma[];

  ngOnInit() {

    this.plataformasService.obterPlataformas()
    .subscribe(
      plataformas => {
        this.plataformas = plataformas;
        console.log(plataformas);
      },
      error => console.log(error)
    );
  }

}
