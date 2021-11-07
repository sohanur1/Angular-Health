import { TestBed } from '@angular/core/testing';

import { MasterMedicineService } from './master-medicine.service';

describe('MasterMedicineService', () => {
  let service: MasterMedicineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterMedicineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
