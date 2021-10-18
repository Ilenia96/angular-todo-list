import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {
items = ['Un esempio... oggi devo rifare il letto, poi?'];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  removeItem(event : string) {
    const userdeleted = this.items.findIndex((user) => user);
    this.items.splice(userdeleted, 1);
    console.log(event);
  }



}
