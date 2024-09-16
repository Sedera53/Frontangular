import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmodeexecutionComponent } from './addmodeexecution.component';

describe('AddmodeexecutionComponent', () => {
  let component: AddmodeexecutionComponent;
  let fixture: ComponentFixture<AddmodeexecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmodeexecutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmodeexecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
