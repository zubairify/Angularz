import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumModel } from '../album.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  albumList: AlbumModel[] = [];

  constructor(private service : AlbumService) { }

  ngOnInit() {
    this.albumList = this.service.getList();
  }

  delete(index: number) {
    var ans = confirm("Are You Sure You want To delete?")
    if (ans) {
      this.service.deleteAlbum(index); //delete from service
    }
  } 
  
  edit(index : number) {
    this.service.update(index);
  }
  
  sortByTitle() {
    this.service.sortByTitle();
  }

  sortByPrice() {
    this.service.sortByPrice();
  }
}
