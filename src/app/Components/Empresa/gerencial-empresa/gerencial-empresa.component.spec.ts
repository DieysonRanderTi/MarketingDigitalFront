import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerencialEmpresaComponent } from './gerencial-empresa.component';

describe('GerencialEmpresaComponent', () => {
  let component: GerencialEmpresaComponent;
  let fixture: ComponentFixture<GerencialEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerencialEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerencialEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
