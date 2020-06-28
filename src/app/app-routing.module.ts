import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddSongsComponent } from './add-songs/add-songs.component';
import { SongListComponent } from './song-list/song-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'addSongs',
    component: AddSongsComponent
  },
  {
    path: 'songList',
    component: SongListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
