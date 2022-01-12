import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Item} from "../model/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private url: string;
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};


  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/items`;
  }

  getItems(): Observable<any> {
    return this.http.get<Item[]>(this.url)
      .pipe(
        map(items => items.sort((i1: Item, i2: Item) => i1.name.localeCompare(i2.name)))
      );
  }

}
