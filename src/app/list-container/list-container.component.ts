import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {
items = ['Cosa vuoi annotare oggi?'];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  removeItem(event : string) {
    const userdeleted = this.items.findIndex((user) => user);
    this.items.splice(userdeleted, 100);
    console.log(event);
  }



}
