import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemDetailsComponent} from './item-details/item-details.component';
import {HomepageComponent} from "./homepage/homepage.component";
import {AddItemFormComponent} from "./add-item-form/add-item-form.component";
import {ItemOverviewComponent} from "./item-overview/item-overview.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NameFilterPipe} from "../pipes/name-filter.pipe";

@NgModule({
  declarations: [
    ItemDetailsComponent,
    HomepageComponent,
    AddItemFormComponent,
    ItemOverviewComponent,
    NameFilterPipe
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ]
})

export class WebpagesModule {
}
