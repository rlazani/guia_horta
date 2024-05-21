import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaCatalogoComponent } from './ficha-catalogo.component';

describe('FichaCatalogoComponent', () => {
  let component: FichaCatalogoComponent;
  let fixture: ComponentFixture<FichaCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaCatalogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
