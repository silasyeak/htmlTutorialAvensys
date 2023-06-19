import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cop2Component } from './cop2.component';

describe('Cop2Component', () => {
  let component: Cop2Component;
  let fixture: ComponentFixture<Cop2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cop2Component]
    });
    fixture = TestBed.createComponent(Cop2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
