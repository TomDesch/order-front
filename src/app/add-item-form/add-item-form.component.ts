import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ItemService} from "../service/item.service";
import {Item} from "../model/Item";

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})

export class AddItemFormComponent implements OnInit {
  addItemForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
    price: ['', [Validators.required]],
    amountOfStock: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let item: Item = this.addItemForm.value as Item;
    this.itemService.addItem(item).subscribe();

    // this.itemService.addItem(this.addItemForm.getRawValue()).subscribe();

    this.addItemForm.reset();
  }
}
