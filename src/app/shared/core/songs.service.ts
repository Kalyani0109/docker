import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(
    private http: HttpClient
  ) { }

  addSongs(model) {
    return this.http.post('http://localhost:8080/music/addSong', model);
  }

  getSongs() {
    return this.http.get('http://localhost:8080/music/display');
  }

  deleteSongs(model) {
    return this.http.get('http://localhost:8080/music/delete/' + model);
  }
}
