import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbeneficiareComponent } from './addbeneficiare.component';

describe('AddbeneficiareComponent', () => {
  let component: AddbeneficiareComponent;
  let fixture: ComponentFixture<AddbeneficiareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbeneficiareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddbeneficiareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
