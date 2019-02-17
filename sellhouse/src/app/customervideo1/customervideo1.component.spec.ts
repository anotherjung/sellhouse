import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Customervideo1Component } from './customervideo1.component';

describe('Customervideo1Component', () => {
  let component: Customervideo1Component;
  let fixture: ComponentFixture<Customervideo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Customervideo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Customervideo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
