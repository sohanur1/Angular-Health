import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DrugsCategoryService {

  constructor(private httpClient:HttpClient) { }

  getDrugsCategory(){
    return this.httpClient.get<any>("http://localhost:8080/drug_category").pipe(map((res:any)=>{
      //console.log(res);
      
     return res;
    }))
  } 
}
