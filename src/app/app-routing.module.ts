import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ItemOverviewComponent} from "./item-overview/item-overview.component";

const routes: Routes = [
  {path: '', component: ItemOverviewComponent},
  {path: 'items', component: ItemOverviewComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
