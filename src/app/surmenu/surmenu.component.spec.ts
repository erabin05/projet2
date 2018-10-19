import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurmenuComponent } from './surmenu.component';

describe('SurmenuComponent', () => {
  let component: SurmenuComponent;
  let fixture: ComponentFixture<SurmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
