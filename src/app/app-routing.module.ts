import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ItemOverviewComponent} from "./item-overview/item-overview.component";
import {AddItemFormComponent} from "./add-item-form/add-item-form.component";
import {HomepageComponent} from "./homepage/homepage.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'items', component: ItemOverviewComponent},
  {path: 'items/add-item', component: AddItemFormComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
