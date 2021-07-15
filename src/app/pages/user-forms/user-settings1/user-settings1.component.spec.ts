import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettings1Component } from './user-settings1.component';

describe('UserSettings1Component', () => {
  let component: UserSettings1Component;
  let fixture: ComponentFixture<UserSettings1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettings1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettings1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
