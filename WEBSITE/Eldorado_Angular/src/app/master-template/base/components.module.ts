import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";


@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class ComponentsModule { }
