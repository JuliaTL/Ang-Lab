import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";



@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    FormsModule,
    RouterModule,
    SharedModule,
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    LoginComponent,
  ]
})
export class UserModule { }
