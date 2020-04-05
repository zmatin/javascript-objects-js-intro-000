
var playlist = {
  avici : 'dont wake me up'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist
  return 
  
} 


var playlist = {
  artist: "Avici",
  
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist

}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}