import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ItemService} from "../service/item.service";

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})

export class AddItemFormComponent implements OnInit {
  addItemForm = this.formBuilder.group({
    name: '',
    description: '',
    price: '',
    stockAmount: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.itemService.addItem(this.addItemForm.getRawValue()).subscribe();
    this.addItemForm.reset();
  }
}
