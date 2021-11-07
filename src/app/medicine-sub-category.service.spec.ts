import { TestBed } from '@angular/core/testing';

import { MedicineSubCategoryService } from './medicine-sub-category.service';

describe('MedicineSubCategoryService', () => {
  let service: MedicineSubCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicineSubCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
