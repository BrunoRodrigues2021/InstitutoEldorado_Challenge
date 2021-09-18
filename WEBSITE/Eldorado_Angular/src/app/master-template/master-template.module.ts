import { HomeComponent } from './../views/home/home.component';
import { MasterTemplateRoutes } from './master-template.routing';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesService } from '../views/categories/categories.service';
import { DevicesService } from '../views/devices/devices.service';




@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MasterTemplateRoutes),
    HttpClientModule
  ],
  providers: [CategoriesService, DevicesService],
  exports: []
})
export class MasterTemplateModule { }
