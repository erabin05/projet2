import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuExtendedComponent } from './menu-extended.component';

describe('MenuExtendedComponent', () => {
  let component: MenuExtendedComponent;
  let fixture: ComponentFixture<MenuExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuExtendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
