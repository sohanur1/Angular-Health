import { TestBed } from '@angular/core/testing';

import { DrugsCategoryService } from './drugs-category.service';

describe('DrugsCategoryService', () => {
  let service: DrugsCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrugsCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
