import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JorgechaparroCvComponent } from './jorgechaparro-cv.component';

describe('JorgechaparroCvComponent', () => {
  let component: JorgechaparroCvComponent;
  let fixture: ComponentFixture<JorgechaparroCvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JorgechaparroCvComponent]
    });
    fixture = TestBed.createComponent(JorgechaparroCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
