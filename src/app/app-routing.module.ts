import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ItemOverviewComponent} from "./webpages/item-overview/item-overview.component";
import {AddItemFormComponent} from "./webpages/add-item-form/add-item-form.component";
import {HomepageComponent} from "./webpages/homepage/homepage.component";
import {ItemDetailsComponent} from "./webpages/item-details/item-details.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'items', component: ItemOverviewComponent},
  {path: 'items/add-item', component: AddItemFormComponent},
  {path: 'items/:id', component: ItemDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
