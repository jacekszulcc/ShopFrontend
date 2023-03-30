import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from 'src/app/modules/admin/admin-login/admin-login.component';
import { FullpageadminemptyComponent } from './fullpageadminempty.component';

@NgModule({
  declarations: [
    FullpageadminemptyComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FullpageadminemptyModule { 
  title = "Shop";
}
