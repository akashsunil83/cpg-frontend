import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { FindAdminByidComponent } from './admin/find-admin-byid/find-admin-byid.component';


@NgModule({
  declarations: [AdminComponent, AddAdminComponent, FindAdminByidComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
