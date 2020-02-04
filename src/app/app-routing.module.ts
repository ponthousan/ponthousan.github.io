import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillgenerateComponent } from './billgenerate/billgenerate.component';
import { ShopdetailsComponent } from './shopdetails/shopdetails.component';
const routes: Routes = [
  { path: '', component: BillgenerateComponent, pathMatch: 'full'},
  { path: 'bill-generate', component: BillgenerateComponent },
  { path: 'shop-details', component: ShopdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
