import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ViewShoppingListComponent } from "./view-shopping-list/view-shopping-list.component";
import { ViewShoppingItemComponent } from "./components/view-shopping-item/view-shopping-item.component";
import { AddPurchaseComponent } from "./add-purchase/add-purchase.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditShoppingItemComponent } from "./components/edit-shopping-item/edit-shopping-item.component";
import { AuthGuard } from "./services/auth-guard.service";
import { CanDeactivateGuard } from "./services/can-deactivate-guard.service";


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'add-purchase', component: AddPurchaseComponent },
  { path: 'view-shopping-list', component: ViewShoppingListComponent, canActivate: [AuthGuard],
    children: [
      { path: ':view-shopping-item/:id', component: ViewShoppingItemComponent },
      { path: ':view-shopping-item/:id/:edit', component: EditShoppingItemComponent, canDeactivate: [CanDeactivateGuard] },
    ]
  },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
