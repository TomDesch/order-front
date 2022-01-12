import { Component, OnInit } from '@angular/core';
import {ItemService} from "../service/item.service";

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.css']
})
export class ItemOverviewComponent implements OnInit {


  constructor(private itemService: ItemService) {

  }

  ngOnInit(): void {
  }

  getItems() {

  }

}