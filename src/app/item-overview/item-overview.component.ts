import {Component, OnInit} from '@angular/core';
import {ItemService} from "../service/item.service";
import {Item} from "../model/Item";

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.css']
})
export class ItemOverviewComponent implements OnInit {

  items: Item[] = [];
  searchText?: string;


  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.getItems();
  }

  getStockUrgencyShortened(item: Item): string {
    //Every urgency starts with STOCK_ <-- cutting this off
    let urgency = item.stockUrgency.slice(6).toLowerCase();
    return urgency[0].toUpperCase() + urgency.substring(1);
  }

  getItems() {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  addItemForm() {

  }
}
