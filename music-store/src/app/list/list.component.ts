import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumModel } from '../album.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  albumList: AlbumModel[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  delete(index: number) {
    var ans = confirm("Are You Sure You want To delete?")
    if (ans) {
      //delete from service
    }
  }  
}
