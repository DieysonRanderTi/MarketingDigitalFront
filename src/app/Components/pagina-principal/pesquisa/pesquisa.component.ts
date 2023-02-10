import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  palavraPesquisa: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  buscarAnunciosPorDescricao(){
    this.palavraPesquisa
    debugger;

  }
}
