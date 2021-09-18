import { CategoriesComponent } from './../views/categories/categories.component';
import { DevicesComponent } from './../views/devices/devices.component';
import { Routes } from "@angular/router";
import { HomeComponent } from "../views/home/home.component";

export const MasterTemplateRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "devices", component: DevicesComponent },
  { path: "categories", component: CategoriesComponent },
];
