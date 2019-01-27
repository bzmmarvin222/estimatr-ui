import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OauthLoginsComponent } from './oauth-logins.component';

describe('OauthLoginsComponent', () => {
  let component: OauthLoginsComponent;
  let fixture: ComponentFixture<OauthLoginsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OauthLoginsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OauthLoginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
