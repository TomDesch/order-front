import {Component, OnInit} from '@angular/core';
import {Item} from "../../model/Item";
import {ItemService} from "../../service/item.service";
import {ActivatedRoute, Router} from "@angular/router";
import {catchError, Observable, throwError} from "rxjs";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  itemToDisplay$!: Observable<Item>;

  constructor(private itemService: ItemService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.displayItemDetails();
  }

  displayItemDetails(): void {
    this.activeRoute.params.subscribe(
      params => {
        this.selectItemToDisplay(params['id'])
      });
  }

  selectItemToDisplay(id: string): void {
    this.itemToDisplay$ = this.itemService
      .getItem(id)
      .pipe(
        catchError(error => {
          this.router.navigate(['items']);
          console.log("Error: item id not found in database.")
          return throwError(error);
        }));
  }
}
