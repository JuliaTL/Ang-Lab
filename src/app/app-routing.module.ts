import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContainerComponent } from './container/container.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './user/login/login.component';
import { CreateShoppingItemPageComponent } from './create-shopping-item-page/create-shopping-item-page.component';
import { ShoppingListPageComponent } from './shopping-list-page/shopping-list-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AuthGuard } from './user/auth-guard.service';


const routes: Routes = [
  {path: '',  component: ContainerComponent, children: [
    {path: '', component: HomePageComponent}
    ]
  },
  {path: 'create-shopping-item',  component: ContainerComponent, children: [
      {path: '', component: CreateShoppingItemPageComponent}
    ]
  },
  {path: 'shopping-list',  component: ContainerComponent, canActivate: [AuthGuard], children: [
      {path: '', component: ShoppingListPageComponent}
    ]
  },
  {path: 'auth', component: LoginComponent},
  {path: 'not-found', component: NotFoundPageComponent},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
