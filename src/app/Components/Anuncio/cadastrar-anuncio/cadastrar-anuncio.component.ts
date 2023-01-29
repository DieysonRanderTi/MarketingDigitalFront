import { Anuncio } from './../../../Models/Anuncio';
import { CategoriaService } from './../../../Services/CategoriaService';
import { EmpresaService } from './../../../Services/EmpresaService';
import { AnuncioService } from 'src/app/Services/AnuncioService';
import { Empresa } from './../../../Models/Empresa';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaAnuncio } from 'src/app/Models/CategoriaAnuncio';

@Component({
  selector: 'app-cadastrar-anuncio',
  templateUrl: './cadastrar-anuncio.component.html',
  styleUrls: ['./cadastrar-anuncio.component.css'],
})
export class CadastrarAnuncioComponent implements OnInit {
  form: FormGroup;
  categorias: CategoriaAnuncio[] = [];
  empresaId: number = 0;
  categoriaId: number = 0;
  localUrl: any;
  file?: File;
  nomeArquivo: string = '';
  public arquivoSelecionado: File | null | undefined;

  constructor(
    private fb: FormBuilder,
    private anuncioservice: AnuncioService,
    private categoriaService: CategoriaService
  ) {
    this.form = this.fb.group({
      descricao: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(150),
        ],
      ],
      data_validade: [null, [Validators.required]],
      preco: [null, [Validators.required]],
      categoria: [null, [Validators.required]],
      imagem: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.BuscarCategorias();
  }

  get f() {
    return this.form.controls;
  }

  onChange(event: any) {
    const selectedFiles = <FileList>event.srcElement.files;
    document.getElementById('imageLabel')!.innerHTML = selectedFiles[0].name;
  }

  salvarAnuncio() {
    debugger;
    this.categoriaId = parseInt(
      (<HTMLSelectElement>document.getElementById('categoriaId')).value
    );
    this.empresaId = 3;

    let anuncio = {
      descricao: this.f.descricao.value,
      data_validade: this.f.data_validade.value,
      preco: this.f.preco.value,
      ativo: true,
      is_destaque: false,
      categoria_id: this.categoriaId,
      empresa_id: this.empresaId,
      imagem_url: this.nomeArquivo,
    };
    console.log(anuncio);
    this.anuncioservice.SalvarAnuncio(anuncio).subscribe(
      (result) => {
        debugger;
        if (result != null) alert('Anúncio cadastrado com sucesso!');
      },
      (erro) => {
        alert('Erro ao cadastrar o anúncio.' + erro);
      }
    );
  }

  BuscarCategorias() {
    this.categoriaService.BuscarTodasCategorias().subscribe(
      (result) => {
        if (result != null) {
          this.categorias = result;
        }
      },
      (erro) => {
        alert(
          `${erro.errror} Nenhuma categoria encontrada. Verifique a conexão com a internet.)`
        );
      }
    );
  }

  inputChange(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    this.arquivoSelecionado = files?.item(0);
    this.anuncioservice
      .EnviarArquivo(this.arquivoSelecionado!)
      .subscribe((nomeArquivo) => {
        this.nomeArquivo = nomeArquivo;
        this.localUrl = this.arquivoSelecionado;
        console.log(this.arquivoSelecionado);
      });
  }

  selectFile(event: any) {
    this.file = <File>event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  // String.prototype.reverse = function(){
  //   return this.split('').reverse().join('');
  // }

  // function mascaraMoeda(campo,evento){
  //   var tecla = (!evento) ? window.event.keyCode : evento.which;
  //   var valor  =  campo.value.replace(/[^\d]+/gi,'').reverse();
  //   var resultado  = "";
  //   var mascara = "##.###.###,##".reverse();
  //   for (var x=0, y=0; x<mascara.length && y<valor.length;) {
  //     if (mascara.charAt(x) != '#') {
  //       resultado += mascara.charAt(x);
  //       x++;
  //     } else {
  //       resultado += valor.charAt(y);
  //       y++;
  //       x++;
  //     }
  //   }
  //   campo.value = resultado.reverse();
  // }
}
