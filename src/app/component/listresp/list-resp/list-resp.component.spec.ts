import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRespComponent } from './list-resp.component';

describe('ListRespComponent', () => {
  let component: ListRespComponent;
  let fixture: ComponentFixture<ListRespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRespComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

});
