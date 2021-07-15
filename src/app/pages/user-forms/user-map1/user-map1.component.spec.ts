import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMap1Component } from './user-map1.component';

describe('UserMap1Component', () => {
  let component: UserMap1Component;
  let fixture: ComponentFixture<UserMap1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMap1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMap1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
