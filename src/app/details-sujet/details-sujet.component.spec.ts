import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSujetComponent } from './details-sujet.component';

describe('DetailsSujetComponent', () => {
  let component: DetailsSujetComponent;
  let fixture: ComponentFixture<DetailsSujetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSujetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
