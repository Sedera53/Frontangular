import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Validatationa2budgetComponent } from './validatationa2budget.component';

describe('Validatationa2budgetComponent', () => {
  let component: Validatationa2budgetComponent;
  let fixture: ComponentFixture<Validatationa2budgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Validatationa2budgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Validatationa2budgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
