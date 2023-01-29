import { Anuncio } from './../../../Models/Anuncio';
import { AnuncioService } from 'src/app/Services/AnuncioService';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-detalhes-anuncio',
  templateUrl: './detalhes-anuncio.component.html',
  styleUrls: ['./detalhes-anuncio.component.css']
})
export class DetalhesAnuncioComponent implements OnInit {
@Input() anuncio!: Anuncio;

  constructor(
    private route: ActivatedRoute,
     private anuncioService: AnuncioService,
     private activeModal: NgbActiveModal) { }

  idAnuncio: string = "";

  ngOnInit(): void {
    this.idAnuncio = this.route.snapshot.params['id'];

    if(this.idAnuncio != ""){
      this.BuscarAnuncioPorId();
    }
  }

  BuscarAnuncioPorId() {
    debugger;
    this.anuncioService.BuscarAnuncioPorId(this.idAnuncio)
      .subscribe((result) => {
        if (result != null) {
          this.anuncio = result;
        }
        else{
          alert(
            `$ Nenhum anúncio encontrado. Verifique a conexão com a internet.`
          );
        }
      }
    );
  }
}
