import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrugsCategoryComponent } from './drugs-category/drugs-category.component';
import { MasterMedicineComponent } from './master-medicine/master-medicine.component';
import { MedicineSubCategoryComponent } from './medicine-sub-category/medicine-sub-category.component';

@NgModule({
  declarations: [
    AppComponent,
    DrugsCategoryComponent,
    MasterMedicineComponent,
    MedicineSubCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
