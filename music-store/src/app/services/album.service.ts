import { Injectable } from '@angular/core';
import { AlbumModel } from '../album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albumList : AlbumModel[] = [];

  constructor() { }

  addAlbum(album : AlbumModel) {
    this.albumList.push(album);
  }

  getList() : AlbumModel[] {
    return this.albumList;
  }

  deleteAlbum(index : number) : AlbumModel[] {
    return this.albumList.splice(index, 1);
  }
}
