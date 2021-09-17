import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './master-template/base/components.module';
import { MasterTemplateComponent } from './master-template/master-template.component';
import { DevicesComponent } from './views/devices/devices.component';
import { CategoriesComponent } from './views/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterTemplateComponent,
    DevicesComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
