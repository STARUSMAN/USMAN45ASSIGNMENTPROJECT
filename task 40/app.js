"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("usman", "album_title 1 ");
let album2 = make_album("hamzah", "album_title 2");
let album3 = make_album("affan", "album_title 3", 10);
// 1 METHODS to console
// console.log(album1,album2,album3);
// 2nd mthod to console
console.log(album1);
console.log(album2);
console.log(album3);
