import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();



  constructor() { }

  ngOnInit(): void {
  }

   addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
