import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeexecutionComponent } from './modeexecution.component';

describe('ModeexecutionComponent', () => {
  let component: ModeexecutionComponent;
  let fixture: ComponentFixture<ModeexecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeexecutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeexecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
