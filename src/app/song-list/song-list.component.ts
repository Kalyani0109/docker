import { Component, OnInit } from '@angular/core';
import { SongsService } from '../shared/core/songs.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songList: any;
  deletImg: any;

  constructor(
    private songServ: SongsService
  ) {
    this.deletImg = 'assets/icons/delete.svg';
  }

  ngOnInit(): void {
    this.songServ.getSongs()
      .subscribe(
        songList => {
          this.songList = songList;

        }
      );
  }

  deleteSong(musicId: any) {
    console.log(musicId);
    this.songServ.deleteSongs(musicId)
      .subscribe(
        response => {
          console.log(response);
          this.songServ.getSongs()
            .subscribe(
              songList => {
                this.songList = songList;

              }
            );
        }
      );
  }

}
