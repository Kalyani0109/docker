export class Song {
    musicId: number;
    songName: string;
    artist: string;
    description: string;

    constructor(
        musicId: number,
        songName: string,
        artist: string,
        description: string,
    ) {

        this.musicId = musicId;
        this.songName = songName;
        this.artist = artist;
        this.description = description;

    }
}
