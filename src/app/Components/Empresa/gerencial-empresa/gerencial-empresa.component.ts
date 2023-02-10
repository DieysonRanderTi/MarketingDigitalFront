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

  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.BuscarEmpresa();
  }


  BuscarEmpresa() {
    debugger;
    this.empresaService.BuscarEmpresaESeusAnuncios("3")
      .subscribe((result) => {
        debugger;
        if (result != null) {
          this.empresa = result;
          this.anuncios = result.anuncios
          this.anunciosNaoPublicados = (result.quantidade_anuncios - result.anuncios.length)
        }
        else{
          alert(
            `$ Nenhuma empresa encontrada. Verifique a conexão com a internet.`
          );
        }
      }
    );
  }
}
