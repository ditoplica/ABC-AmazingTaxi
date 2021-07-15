import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeForgotpasswordComponent } from './fe-forgotpassword.component';

describe('FeForgotpasswordComponent', () => {
  let component: FeForgotpasswordComponent;
  let fixture: ComponentFixture<FeForgotpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeForgotpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
