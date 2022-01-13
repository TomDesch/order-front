import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "./layout/layout.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WebpagesModule} from "./webpages/webpages.module";

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    LayoutModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    WebpagesModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule {
}
