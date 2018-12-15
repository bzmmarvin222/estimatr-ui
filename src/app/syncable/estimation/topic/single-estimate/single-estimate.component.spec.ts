import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SingleEstimateComponent} from './single-estimate.component';

describe('SingleEstimateComponent', () => {
  let component: SingleEstimateComponent;
  let fixture: ComponentFixture<SingleEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SingleEstimateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
