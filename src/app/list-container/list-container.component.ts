import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {
items = ['Un esempio: "scrivere codice!"']



  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem : string) {
  this.items.push(newItem);
  }


  clearList() {
    this.items = [];
  }



}
