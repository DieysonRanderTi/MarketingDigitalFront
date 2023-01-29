import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

constructor(
  private http: HttpClient
) { }

  BuscarTodasCategorias(): Observable<any>{
    return this.http.get<any[]>(`${environment.apiUrl}/categoriaanuncio`)
  }
}
