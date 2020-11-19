import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumModel } from '../album.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  album: AlbumModel;

  constructor(private router: Router) { 
    this.album = new AlbumModel();
  }

  ngOnInit() {
  }
  
  saveAlbum() {
    this.router.navigate(['list']);
  }
}
