import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantSujetComponent } from './etudiant-sujet.component';

describe('EtudiantSujetComponent', () => {
  let component: EtudiantSujetComponent;
  let fixture: ComponentFixture<EtudiantSujetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantSujetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantSujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
