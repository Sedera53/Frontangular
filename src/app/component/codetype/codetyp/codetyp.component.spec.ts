import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodetypComponent } from './codetyp.component';

describe('CodetypComponent', () => {
  let component: CodetypComponent;
  let fixture: ComponentFixture<CodetypComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodetypComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodetypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
