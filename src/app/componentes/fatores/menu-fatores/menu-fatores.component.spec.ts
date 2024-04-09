import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFatoresComponent } from './menu-fatores.component';

describe('MenuFatoresComponent', () => {
  let component: MenuFatoresComponent;
  let fixture: ComponentFixture<MenuFatoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFatoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuFatoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
