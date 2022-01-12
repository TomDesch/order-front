import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "./layout/layout.module";
import { ItemOverviewComponent } from './item-overview/item-overview.component';
import { NameFilterPipe } from './pipes/name-filter.pipe';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ItemOverviewComponent,
    NameFilterPipe
  ],

  imports: [
    BrowserModule,
    LayoutModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule {
}
