import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCVComponent } from './test-cv.component';

describe('TestCVComponent', () => {
  let component: TestCVComponent;
  let fixture: ComponentFixture<TestCVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
