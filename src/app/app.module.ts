import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {LOCALE_ID, DEFAULT_CURRENCY_CODE} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

import { AnuncioService } from './Services/AnuncioService';
import { EmpresaService } from './Services/EmpresaService';
import { CategoriaService } from './Services/CategoriaService';

import { ToastNoAnimationModule, ToastNoAnimation, ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PesquisaComponent } from './Components/pagina-principal/pesquisa/pesquisa.component';
import { SliderMenuComponent } from './Components/pagina-principal/slider-menu/slider-menu.component';
import { AnuncioComponent } from './Components/pagina-principal/anuncio/anuncio.component';
import { CadastrarAnuncioComponent } from './Components/Anuncio/cadastrar-anuncio/cadastrar-anuncio.component';
import { PaginaPrincipalComponent } from './Components/pagina-principal/pagina-principal.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DetalhesAnuncioComponent } from './Components/Anuncio/detalhes-anuncio/detalhes-anuncio.component';
import { GerencialEmpresaComponent } from './Components/Empresa/gerencial-empresa/gerencial-empresa.component';
import { CadastroEmpresaComponent } from './Components/Empresa/cadastro-empresa/cadastro-empresa.component';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';


registerLocaleData(localePt, 'pt');''

@NgModule({
  declarations: [
    AppComponent,
    AnuncioComponent,
    PesquisaComponent,
    SliderMenuComponent,
    CadastrarAnuncioComponent,
    PaginaPrincipalComponent,
    FooterComponent,
    DetalhesAnuncioComponent,
    GerencialEmpresaComponent,
    CadastroEmpresaComponent,
    GerencialEmpresaComponent,
    CadastroEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastNoAnimationModule.forRoot(),
    NgxMaskDirective,
    NgxMaskPipe,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true
    }),
    NgxSpinnerModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    provideEnvironmentNgxMask(),
    AnuncioService,
    EmpresaService,
    CategoriaService,
    HttpClient,
    FormBuilder
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
