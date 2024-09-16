import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A2budgetComponent } from './a2budget.component';

describe('A2budgetComponent', () => {
  let component: A2budgetComponent;
  let fixture: ComponentFixture<A2budgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A2budgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A2budgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
