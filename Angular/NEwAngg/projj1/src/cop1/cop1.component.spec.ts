import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cop1Component } from './cop1.component';

describe('Cop1Component', () => {
  let component: Cop1Component;
  let fixture: ComponentFixture<Cop1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cop1Component]
    });
    fixture = TestBed.createComponent(Cop1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
