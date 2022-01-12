import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private readonly _title: string;
  private readonly _itemsUrl: string;
  private readonly _homeUrl: string;

  constructor() {
    this._title = 'Örder webshop';
    this._homeUrl = `${environment.frontendUrl}`;
    this._itemsUrl = `${environment.frontendUrl}/items`;

  }

  get itemsUrl(): string {
    return this._itemsUrl;
  }

  get homeUrl(): string {
    return this._homeUrl;
  }

  get title(): string {
    return this._title;
  }

  ngOnInit(): void {
  }

}
