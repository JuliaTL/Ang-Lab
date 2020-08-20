import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { ContainerComponent } from './container/container.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CreateShoppingItemPageComponent } from './create-shopping-item-page/create-shopping-item-page.component';
import { AuthInterceptorService } from "./user/auth.interceptor.service";
import {ShoplistModule} from "./shopping-list-page/shoplist.module";
import {UserModule} from "./user/user.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    HomePageComponent,
    NotFoundPageComponent,
    CreateShoppingItemPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ShoplistModule,
    SharedModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [ HttpClientModule,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
