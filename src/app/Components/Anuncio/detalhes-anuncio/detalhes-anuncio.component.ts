import { NgxSpinnerService } from 'ngx-spinner';
import { Anuncio } from './../../../Models/Anuncio';
import { AnuncioService } from 'src/app/Services/AnuncioService';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

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
     private spinner: NgxSpinnerService
     ) { }

  idAnuncio: string = "";

  ngOnInit(): void {
    this.idAnuncio = this.route.snapshot.params['id'];

    if(this.idAnuncio != ""){
      this.BuscarAnuncioPorId();
    }
  }

  BuscarAnuncioPorId() {
    debugger;
    this.spinner.show();
    this.anuncioService.BuscarAnuncioPorIdIncludeEmpresa(this.idAnuncio)
      .subscribe((result) => {
        debugger;
        if (result != null) {
          this.anuncio = result.result;
          setTimeout(() =>{
            this.spinner.hide();
          }, 500);
        }
        else{
          setTimeout(() =>{
            this.spinner.hide();
          }, 500);
          alert(
            `$ Nenhum anúncio encontrado. Verifique a conexão com a internet.`
          );
        }
      }
    );
  }
}
