import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsMenuComponent } from './is-menu.component';

describe('IsMenuComponent', () => {
  let component: IsMenuComponent;
  let fixture: ComponentFixture<IsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
