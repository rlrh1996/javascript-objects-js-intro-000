var playlist = {"Taylor Swift": "Shake It Off"};

function updatePlaylist(list, artistName, songTitle) {
    return Object.assign({}, list, {[artistName]: songTitle});
}

function removeFromPlaylist(list, artistName) {
    delete list.artistName;
    return list;
}
