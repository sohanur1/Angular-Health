import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineSubCategoryComponent } from './medicine-sub-category.component';

describe('MedicineSubCategoryComponent', () => {
  let component: MedicineSubCategoryComponent;
  let fixture: ComponentFixture<MedicineSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineSubCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
