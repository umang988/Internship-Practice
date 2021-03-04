import { TestBed } from '@angular/core/testing';

import { StudentAddPresenterService } from './student-add-presenter.service';

describe('StudentAddPresenterService', () => {
  let service: StudentAddPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentAddPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
