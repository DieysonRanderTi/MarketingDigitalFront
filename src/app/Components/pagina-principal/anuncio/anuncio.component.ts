import { NgxSpinnerService } from 'ngx-spinner';
import { DetalhesAnuncioComponent } from './../../Anuncio/detalhes-anuncio/detalhes-anuncio.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anuncio } from '../../../Models/Anuncio';
import { AnuncioService } from 'src/app/Services/AnuncioService';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import {
  tap,
  map,
  filter,
  distinctUntilChanged,
  debounceTime,
  switchMap,
} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css'],
})
export class AnuncioComponent implements OnInit {
  descricao: string = '';
  public anuncios: Anuncio[] = [];
  queryField = new FormControl();
  results: Observable<any>;

  constructor(
    private anuncioservice: AnuncioService,
    private route: Router,
    private spinner: NgxSpinnerService,
    private toast: ToastrService,
  ) {}

  ngOnInit(): void {
    this.buscarTodosAnuncios();
    // debugger;
    // this.results = this.queryField.valueChanges
    //   .pipe(
    //     map((value) => value.trim()),
    //     filter((value) => value.length >= 3),
    //     debounceTime(200),
    //     distinctUntilChanged(),
    //     switchMap( async value => this.buscarAnunciosPorDescricao(value),
    //     )
    //   ),
    //   tap((res: any) => this.anuncios = res.anuncios )
    //   map((res: any => res.results));
  }

  buscarTodosAnuncios() {
    this.spinner.show();
    this.anuncioservice.BuscarTodosAnunciosOuPorDescricao().subscribe(
      (result: any) => {
        debugger;
        if (result != null) this.anuncios = result;
        setTimeout(() => {
          this.spinner.hide();
        }, 500);
      },
      (erro) => {
        this.toast.error('Erro ao buscar os anúncios. Verifique a conexão com a internet.');
        this.spinner.hide();
      }
    );
  }

  buscarAnunciosPorDescricao() {
debugger;
    if(this.descricao.trim() == ""){
      this.buscarTodosAnuncios();
    }
    else if(this.descricao.length < 3){
      this.toast.error('Digite no minimo 3 caracteres para fazer a busca.');
    }
    else{
      this.spinner.show();
      this.anuncioservice
        .BuscarTodosAnunciosOuPorDescricao(this.descricao)
        .subscribe(
          (result: any) => {
            debugger;
            if (result != null) this.anuncios = result;
            setTimeout(() => {
              this.spinner.hide();
            }, 500);
            if(result == null){
              this.spinner.hide();
              this.toast.error('Nehum resultado para a busca: '+this.descricao.toLocaleUpperCase());
            }
          },
          (erro) => {
            this.toast.error('Erro ao buscar os anúncios. Verifique a conexão com a internet.');
            this.spinner.hide();
          }
        );
    }
  }

  abrirModalAnuncio(anuncio: Anuncio) {
    // const modalRef = this.modalService.open(DetalhesAnuncioComponent);
    // modalRef.componentInstance.anuncio = anuncio;
  }
}
