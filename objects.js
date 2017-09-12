var playlist = {"Taylor Swift": "Shake It Off"};

function updatePlaylist(list, artistName, songTitle) {
    list.artistName = songTitle;
    return list;
}

function removeFromPlaylist(list, artistName) {
    delete list.artistName;
    return list;
}
