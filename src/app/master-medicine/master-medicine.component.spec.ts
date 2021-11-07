import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterMedicineComponent } from './master-medicine.component';

describe('MasterMedicineComponent', () => {
  let component: MasterMedicineComponent;
  let fixture: ComponentFixture<MasterMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
