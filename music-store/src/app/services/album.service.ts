import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumModel } from '../album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albumList : AlbumModel[] = [];
  private baseUrl : string = "http://localhost:8880";

  constructor(private router : Router, private http : HttpClient) { }

  addAlbum(album : AlbumModel) {
    this.http.post(this.baseUrl + "/add", album).subscribe(
      data => data = album
    );
    // this.albumList.push(album);
  }

  getList() {
    return this.http.get<AlbumModel[]>(this.baseUrl + "/list");
    // return this.albumList;
  }

  deleteAlbum(index : number) : AlbumModel[] {
    return this.albumList.splice(index, 1);
  }

  update(index : number) {
    this.router.navigate(['edit'], {queryParams: {index: index}});
  }

  sortByTitle() {
    this.albumList.sort((a,b) => a.title > b.title ? 1 : (
      (a.title < b.title ? -1 : 0)
    ));
    return this.albumList;
  }

  sortByPrice() {
    this.albumList.sort((a,b) => a.price > b.price ? 1 : (
      (a.price < b.price ? -1 : 0)
    ));
    return this.albumList;
  }

  searchByArtist(artist : string) {
    return this.albumList.find(x => x.artist == artist);
  }

  searchById(id : number) {
    return this.http.get<AlbumModel>(this.baseUrl + "/get/" + id);
    // return this.albumList.find(x => x.id == id);
  }

  getByIndex(index: number) {
    return this.albumList[index];
  }
}
