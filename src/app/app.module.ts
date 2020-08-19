import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { ContainerComponent } from './container/container.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginComponent } from './user/login/login.component';
import { ShoppingListPageComponent } from './shopping-list-page/shopping-list-page.component';
import { CreateShoppingItemPageComponent } from './create-shopping-item-page/create-shopping-item-page.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    HomePageComponent,
    NotFoundPageComponent,
    LoginComponent,
    ShoppingListPageComponent,
    CreateShoppingItemPageComponent,
    SpinnerComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ],
  providers: [ HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
