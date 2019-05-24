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
}
