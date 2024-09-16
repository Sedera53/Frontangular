import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsMenuComponent } from './as-menu.component';

describe('AsMenuComponent', () => {
  let component: AsMenuComponent;
  let fixture: ComponentFixture<AsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
