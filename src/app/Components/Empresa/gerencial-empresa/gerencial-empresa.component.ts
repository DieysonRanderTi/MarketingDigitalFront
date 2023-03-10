import { NgxSpinnerService } from 'ngx-spinner';
import { EmpresaService } from './../../../Services/EmpresaService';
import { Component, Input, OnInit } from '@angular/core';
import { Empresa } from 'src/app/Models/Empresa';
import { Anuncio } from 'src/app/Models/Anuncio';

@Component({
  selector: 'app-gerencial-empresa',
  templateUrl: './gerencial-empresa.component.html',
  styleUrls: ['./gerencial-empresa.component.css']
})
export class GerencialEmpresaComponent implements OnInit {

  @Input() empresa!: Empresa;
  public anuncios: Anuncio[] = [];
  anunciosNaoPublicados: number = 0;

  constructor(
    private empresaService: EmpresaService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.BuscarEmpresa();
  }


  BuscarEmpresa() {
    debugger;
    this.spinner.show();
    this.empresaService.BuscarEmpresaESeusAnuncios("3")
      .subscribe((result) => {
        debugger;
        if (result != null) {
          this.empresa = result;
          this.anuncios = result.anuncios
          this.anunciosNaoPublicados = (result.quantidade_anuncios - result.anuncios.length)
          setTimeout(() =>{
            this.spinner.hide();
          }, 500);
        }
        else{
          setTimeout(() =>{
            this.spinner.hide();
          }, 500);
          alert(
            `$ Nenhuma empresa encontrada. Verifique a conexão com a internet.`
          );
        }
      }
    );
  }
}
