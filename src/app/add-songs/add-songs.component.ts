import { Component, OnInit } from '@angular/core';
import { Song } from '../utils/song';
import { SongsService } from '../shared/core/songs.service';

@Component({
  selector: 'app-add-songs',
  templateUrl: './add-songs.component.html',
  styleUrls: ['./add-songs.component.css']
})
export class AddSongsComponent implements OnInit {

  song: Song = new Song(null, '', '', '');

  constructor(
    private songServ: SongsService
  ) { }

  ngOnInit(): void {
  }

  addSongs(songData: Song) {
    this.songServ.addSongs(songData)
      .subscribe(
        music => {
          console.log('response', music);
          if (music['musicId']) {
            this.song = new Song(null, '', '', '');
           }
        }
      );
  }

}
