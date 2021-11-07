import { Component, OnInit } from '@angular/core';
import { DrugsCategoryService } from '../drugs-category.service';
import { drugs_category } from '../drugs_category';

@Component({
  selector: 'app-drugs-category',
  templateUrl: './drugs-category.component.html',
  styleUrls: ['./drugs-category.component.css']
})
export class DrugsCategoryComponent implements OnInit {

  drugsCategory!: drugs_category[];
  constructor(private drugscategory: DrugsCategoryService) { }

  ngOnInit(): void {
    this.Drugs_Category()
  }
  public Drugs_Category(){
    this.drugscategory.getDrugsCategory().subscribe(data=>{
      //console.log(data)
      this.drugsCategory=data;
    },error=>{
      //console.log("ERROR")
    })

  }

}
