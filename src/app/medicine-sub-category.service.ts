import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicineSubCategoryService {

  constructor(private httpClient: HttpClient) { }
  getMedicineSub(){
    return this.httpClient.get<any>("http://localhost:8080/medicine_sub_category").pipe(map((res:any)=>{
      return res;
    }))
  }
}
