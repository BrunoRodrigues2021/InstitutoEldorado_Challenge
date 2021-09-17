import { DashboardComponent } from './../views/dashboard/dashboard.component';
import { MasterTemplateRoutes } from './master-template.routing';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MasterTemplateRoutes)
  ]
})
export class MasterTemplateModule { }
