import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ItemService} from "../../service/item.service";
import {Item} from "../../model/Item";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})

export class AddItemFormComponent implements OnInit {


  addItemForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(1)]],
    description: ['', [Validators.required, Validators.maxLength(255)]],
    price: [0, [Validators.required, Validators.min(1)]],
    amountOfStock: [0, [Validators.required, Validators.min(1)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const item: Item = this.addItemForm.value as Item;
    this.addItemForm.disable();

    this.itemService.addItem(item)
      .subscribe(
        {
          next: () => {
            console.log(`Created ${item.name}`);
            //todo need then?
            this.router.navigate(['items']);
          },
          error: (error) => {
            console.log(`Error creating item` + error);
            this.addItemForm.enable();
          }
        }
    );
    this.addItemForm.reset();
  }

  get name(): FormControl {
    return this.addItemForm.get('name') as FormControl;
  }

  get description(): FormControl {
    return this.addItemForm.get('description') as FormControl;
  }

  get price(): FormControl {
    return this.addItemForm.get('price') as FormControl;
  }

  get amountOfStock(): FormControl {
    return this.addItemForm.get('amountOfStock') as FormControl;
  }
}
