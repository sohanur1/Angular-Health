import { Component, OnInit } from '@angular/core';
import { MasterMedicineService } from '../master-medicine.service';
import { master_medicine } from '../master_medicine_module';

@Component({
  selector: 'app-master-medicine',
  templateUrl: './master-medicine.component.html',
  styleUrls: ['./master-medicine.component.css']
})
export class MasterMedicineComponent implements OnInit {

  masterMedicine!: master_medicine[];
  constructor(private mastermedicine: MasterMedicineService) { }

  ngOnInit(): void {
    this.master_medicine()
  }
  public master_medicine(){
    this.mastermedicine.getMasterMedicine().subscribe(data=>{
      //console.log(data);
      this.masterMedicine=data
    })
  }

}
