import { Component, OnInit } from '@angular/core';
import { MedicineSubCategoryService } from '../medicine-sub-category.service';
import { medicine_sub_category } from '../medicineSubCat_Module';

@Component({
  selector: 'app-medicine-sub-category',
  templateUrl: './medicine-sub-category.component.html',
  styleUrls: ['./medicine-sub-category.component.css']
})
export class MedicineSubCategoryComponent implements OnInit {

  medicineSubCa!: medicine_sub_category[];
  constructor(private medicineSub: MedicineSubCategoryService) { }

  ngOnInit(): void {
    this.medicinesubCat();
  }
  public medicinesubCat(){
    this.medicineSub.getMedicineSub().subscribe(data=>{
      console.log(data);
      this.medicineSubCa=data;
    })
  }

}
