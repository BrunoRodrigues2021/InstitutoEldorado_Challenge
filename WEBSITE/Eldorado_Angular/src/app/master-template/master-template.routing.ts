import { CategoriesComponent } from './../views/categories/categories.component';
import { DevicesComponent } from './../views/devices/devices.component';
import { Routes } from "@angular/router";
import { DashboardComponent } from "../views/dashboard/dashboard.component";

export const MasterTemplateRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "devices", component: DevicesComponent },
  { path: "categories", component: CategoriesComponent },
];
