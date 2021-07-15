import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHistory1Component } from './user-history1.component';

describe('UserHistory1Component', () => {
  let component: UserHistory1Component;
  let fixture: ComponentFixture<UserHistory1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHistory1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHistory1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
