import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationDropdownComponent } from './estimation-dropdown.component';

describe('EstimationDropdownComponent', () => {
  let component: EstimationDropdownComponent;
  let fixture: ComponentFixture<EstimationDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimationDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimationDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
