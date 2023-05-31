import { CategoriaAnuncio } from 'src/app/Models/CategoriaAnuncio';
import { Empresa } from '../Models/Empresa';

export class Anuncio{
    id: number;
    descricao: string;
    data_validade: Date;
    preco: number;
    ativo: boolean;
    is_destaque: boolean;
    categoria_Id: number;
    categoria: CategoriaAnuncio
    empresa_Id: number;
    empresa: Empresa;
    imagem_url: string;

    constructor(id: number,
      descricao: string,
      data_validade: Date,
      preco: number,
      ativo: boolean,
      is_destaque: boolean,
      categoria_Id: number,
      empresa_Id: number,
      empresa: Empresa,
      categoria: CategoriaAnuncio,
      imagem_url: string){
        this.id = id;
        this.descricao = descricao;
        this.data_validade = data_validade;
        this.preco = preco;
        this.ativo = ativo;
        this.is_destaque = is_destaque;
        this.categoria_Id = categoria_Id;
        this.categoria = categoria;
        this.empresa_Id = empresa_Id;
        this.empresa = empresa;
        this.imagem_url = imagem_url;
    }
}
