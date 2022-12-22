import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullpageadminComponent } from './fullpageadmin.component';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminProductComponent } from 'src/app/modules/admin/admin-product/admin-product.component';


@NgModule({
  declarations: [
    FullpageadminComponent,
    AdminComponent,
    AdminProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class FullpageadminModule { 
  title = "Shop";
}
