import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private readonly _title: string;

  constructor() {
    this._title = 'Animals Dating';
  }

  get title(): string {
    return this._title;
  }

  ngOnInit(): void {
  }

}
