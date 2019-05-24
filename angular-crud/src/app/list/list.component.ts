import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Item[] = [];

  constructor(private listService: ListService) { }

  ngOnInit() {
    
    this.items = this.listService.getItems();
  }

}
