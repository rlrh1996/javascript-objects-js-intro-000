var playlist = {};

function updatePlaylist(list, artistName, songTitle) {
    return Object.assign({}, list, {[artistName]: songTitle});
}

function removeFromPlaylist(list, artistName) {
    var newObject = Object.assign({}, list);
    delete newObject.artistName;
    return newObject;
}
