import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ListService } from '../list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Item[] = [];

  constructor(private listService: ListService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.items = this.listService.getItems();
  }

  addItem(){
    this.router.navigate(["new"], {relativeTo: this.route});
  }
}
