var playlist = {"Taylor Swift": "Shake it Off"};

function updatePlaylist(list, artistName, songTitle) {
    // return Object.assign({}, list, {[artistName]: songTitle});
    return list[artistName] = songTitle;
}

function removeFromPlaylist(list, artistName) {
    //var newObject = Object.assign({}, list);
    //delete newObject.artistName;
    //return newObject;
    delete list[artistName];
    return list;
}
