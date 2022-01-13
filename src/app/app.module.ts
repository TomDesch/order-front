import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "./layout/layout.module";
import { ItemOverviewComponent } from './webpages/item-overview/item-overview.component';
import { NameFilterPipe } from './pipes/name-filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddItemFormComponent } from './webpages/add-item-form/add-item-form.component';
import { HomepageComponent } from './webpages/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemOverviewComponent,
    NameFilterPipe,
    AddItemFormComponent,
    HomepageComponent
  ],

  imports: [
    BrowserModule,
    LayoutModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule {
}
