import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { ContainerComponent } from "../container/container.component";
import { AuthGuard } from "../user/auth-guard.service";
import { ShoppingListPageComponent } from "./shopping-list-page.component";

const routes: Routes = [
  {
    path: 'shopping-list',
    component: ContainerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ShoppingListPageComponent
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoplistRoutingModule {}
