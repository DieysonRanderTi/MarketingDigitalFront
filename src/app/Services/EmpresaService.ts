import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

constructor(
  private http: HttpClient
) { }

  BuscarTodasEmpresas(): Observable<any>{
    return this.http.get<any[]>(`${environment.apiUrl}/anuncio`)
  }

  BuscarEmpresaESeusAnuncios(id: string): Observable<any>{
    return this.http.get<any[]>(`${environment.apiUrl}/empresa/buscarempresaeseusanuncios/`+id)
  }
}
