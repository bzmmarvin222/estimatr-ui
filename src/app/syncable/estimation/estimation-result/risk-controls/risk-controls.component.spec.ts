import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskControlsComponent } from './risk-controls.component';

describe('RiskControlsComponent', () => {
  let component: RiskControlsComponent;
  let fixture: ComponentFixture<RiskControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
