import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private items : Item[] = [
    new Item("Test", "this is a test")

  ]
  constructor() { }

  getItems(){
    return this.items.slice();
  }

  addItem(item: Item){
    this.items.push(item);
  }

  updateItem(index: number, item: Item){
    this.items[index] = item;
  }
}
