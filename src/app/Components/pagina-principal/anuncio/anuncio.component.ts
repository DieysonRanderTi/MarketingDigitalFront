import { DetalhesAnuncioComponent } from './../../Anuncio/detalhes-anuncio/detalhes-anuncio.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anuncio } from '../../../Models/Anuncio';
import { AnuncioService } from 'src/app/Services/AnuncioService';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {
  public anuncios: Anuncio[] = [];

  constructor(
    private anuncioservice: AnuncioService,
     private route: Router) {}

  ngOnInit(): void {
    this.buscarTodosAnuncios();
  }

  buscarTodosAnuncios() {
    this.anuncioservice.BuscarTodosAnunciosIncludeEmpresa().subscribe(
      (result: any) => {
        debugger;
        if (result != null) this.anuncios = result;
      },
      (erro) => {
        alert('Erro ao buscar os anúncios.');
      }
    );
  }

  abrirModalAnuncio(anuncio: Anuncio){
    // const modalRef = this.modalService.open(DetalhesAnuncioComponent);
    // modalRef.componentInstance.anuncio = anuncio;
  }
}
