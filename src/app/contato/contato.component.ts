import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styles: [
  ]
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  botaoEnviar() {
    alert(`Obrigado por deixar sua mensagem! Iremos responder assim que possível.`);
  }

}
