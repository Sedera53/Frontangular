import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcompteComponent } from './addcompte.component';

describe('AddcompteComponent', () => {
  let component: AddcompteComponent;
  let fixture: ComponentFixture<AddcompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
