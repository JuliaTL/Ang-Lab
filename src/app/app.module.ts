import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { FocusDirective } from "./directives/focus.directive";
import { HideBtnDirective } from './directives/hide-btn.directive';

@NgModule({
  declarations: [
    AppComponent,
    FocusDirective,
    HideBtnDirective
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
