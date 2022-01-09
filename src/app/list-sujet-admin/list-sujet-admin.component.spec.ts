import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSujetAdminComponent } from './list-sujet-admin.component';

describe('ListSujetAdminComponent', () => {
  let component: ListSujetAdminComponent;
  let fixture: ComponentFixture<ListSujetAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSujetAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSujetAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
