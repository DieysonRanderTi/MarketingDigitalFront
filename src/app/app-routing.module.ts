import { GerencialEmpresaComponent } from './Components/Empresa/gerencial-empresa/gerencial-empresa.component';
import { CadastroEmpresaComponent } from './Components/Empresa/cadastro-empresa/cadastro-empresa.component';
import { DetalhesAnuncioComponent } from './Components/Anuncio/detalhes-anuncio/detalhes-anuncio.component';
import { PaginaPrincipalComponent } from './Components/pagina-principal/pagina-principal.component';
import { CadastrarAnuncioComponent } from './Components/Anuncio/cadastrar-anuncio/cadastrar-anuncio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: PaginaPrincipalComponent
  },
  {
    path: 'cadastrar-anuncio', component: CadastrarAnuncioComponent
  },
  {
    path: 'detalhes-anuncio/:id', component: DetalhesAnuncioComponent
  },
  {
    path: 'cadastro-empresa', component: CadastroEmpresaComponent
  },
  {
    path: 'gerencial-empresa', component: GerencialEmpresaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
