import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainThemeComponent } from './main-theme.component';

describe('MainThemeComponent', () => {
  let component: MainThemeComponent;
  let fixture: ComponentFixture<MainThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainThemeComponent]
    });
    fixture = TestBed.createComponent(MainThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
