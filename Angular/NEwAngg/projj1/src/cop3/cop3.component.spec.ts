import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cop3Component } from './cop3.component';

describe('Cop3Component', () => {
  let component: Cop3Component;
  let fixture: ComponentFixture<Cop3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cop3Component]
    });
    fixture = TestBed.createComponent(Cop3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
