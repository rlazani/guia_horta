import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatorComponent } from './fator.component';

describe('FatorComponent', () => {
  let component: FatorComponent;
  let fixture: ComponentFixture<FatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
