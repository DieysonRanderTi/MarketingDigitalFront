import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAnuncioComponent } from './cadastrar-anuncio.component';

describe('CadastrarAnuncioComponent', () => {
  let component: CadastrarAnuncioComponent;
  let fixture: ComponentFixture<CadastrarAnuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarAnuncioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
