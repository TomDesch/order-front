import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "./layout/layout.module";
import { ItemOverviewComponent } from './item-overview/item-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemOverviewComponent
  ],

  imports: [
    BrowserModule,
    LayoutModule,
    HttpClientModule,
    AppRoutingModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule {
}
