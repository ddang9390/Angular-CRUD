import { Injectable } from '@angular/core';
import { Item } from './item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  itemsChanged = new Subject<Item[]>();

  private items : Item[] = [
    new Item("Test", "this is a test")

  ]
  constructor() { }

  getItems(){
    return this.items.slice();
  }

  getItem(id: number){
    return this.items[id];
  }

  addItem(item: Item){
    this.items.push(item);
    this.itemsChanged.next(this.items.slice());
  }

  updateItem(index: number, item: Item){
    this.items[index] = item;
    this.itemsChanged.next(this.items.slice());
  }

  deleteItem(index: number){
    this.items.splice(index,1);
    this.itemsChanged.next(this.items.slice());
  }
}
