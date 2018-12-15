import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EstimationTextComponent} from './estimation-text.component';

describe('EstimationTextComponent', () => {
  let component: EstimationTextComponent;
  let fixture: ComponentFixture<EstimationTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EstimationTextComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimationTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
