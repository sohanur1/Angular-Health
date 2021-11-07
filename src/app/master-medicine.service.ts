import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MasterMedicineService {

  constructor(private httpClient: HttpClient) { }

  getMasterMedicine(){
    return this.httpClient.get<any>("http://localhost:8080/master_medicine").pipe(map((res:any)=>{
      return res;
    }))
  }
}
