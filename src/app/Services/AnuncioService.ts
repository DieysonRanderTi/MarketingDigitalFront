import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Anuncio } from '../Models/Anuncio';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService{

  constructor(
    private http: HttpClient
  ){}

  BuscarTodosAnunciosOuPorDescricao(descricao?: string): Observable<any>{
    return this.http.get<any[]>(`${environment.apiUrl}/anuncio/buscatodosanuncios/`+descricao)
  }
  BuscarAnunciosPorDescricao(descricao: string): Observable<any>{
    return this.http.get<any[]>(`${environment.apiUrl}/anuncio/buscaranunciospordescricao/`+descricao)
  }

  BuscarAnuncioPorId(id: string): Observable<any>{
    return this.http.get<any[]>(`${environment.apiUrl}/anuncio/buscaranuncioporid/`+id)
  }

  BuscarAnuncioPorIdIncludeEmpresa(id: string): Observable<any>{
    return this.http.get<any[]>(`${environment.apiUrl}/anuncio/buscaranuncioporidincludeempresacategoria/`+id)
  }

  GeraClickAnuncio(id: string){
    return this.http.get(`${environment.apiUrl}/anuncio/geraclickanuncio/`+id)
  }

  BuscarTodosAnuncios(): Observable<any>{
    return this.http.get<any[]>(`${environment.apiUrl}/anuncio`)
  }
  SalvarAnuncio(obj: any){
    return this.http.post(`${environment.apiUrl}/anuncio`, obj)
  }
  AtualizarAnuncio(obj: any): Observable<any>{
    return this.http.put(`${environment.apiUrl}/anuncio`, obj)
  }
  DeletarAnuncio(obj: any): Observable<any>{
    return this.http.delete(`${environment.apiUrl}/anuncio`, obj)
  }

  postUpload(file: File): Observable<string>{
    const fileToUpload = file[0] as File;
    const formData: FormData = new FormData();
    formData.append("file", fileToUpload, fileToUpload.name);
    return this.http.post<string>(`${environment.apiUrl}/anuncio/upload-image`, formData);
  }

  EnviarArquivo(arquivoSelecionado: File) : Observable<string> {
    const formData: FormData = new FormData();
    formData.append("arquivoEnviado", arquivoSelecionado, arquivoSelecionado.name);
    return this.http.post<string>(`${environment.apiUrl}/anuncio/enviarArquivo`, formData);
  }
}
