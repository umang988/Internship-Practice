import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddPresentationComponent } from './student-add-presentation.component';

describe('StudentAddPresentationComponent', () => {
  let component: StudentAddPresentationComponent;
  let fixture: ComponentFixture<StudentAddPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAddPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAddPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
