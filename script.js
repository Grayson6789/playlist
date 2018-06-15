let headerContainer = document.createElement('div');
let bodyContainer = document.createElement('div');
let footerContainer = document.createElement('div');

let header = document.createElement('header');
header.innerText = "Header";
let main = document.createElement('main');
main.innerText = "Main";
let footer = document.createElement('footer');
footer.innerText = "Footer";

let playlist = document.createElement('input');
playlistInput.setAttribute('placeholder', 'choose tracks');
article.appendChild(playlistInput);

let chooseTracks = document.createElement('button');
chooseTracks.innerText = 'choose tracks';
article.appendChild(chooseTracks)

let playlistOutput = document.createElement('div');
let playlistImage = document.createElement('img');
article.appendChild(playlistOutput);
article.appendChild(playlistImage);

function handlePlaylist(info){
  playlistOutput.innerText = info.name;
  playlistImage.setAttribute('src', info.sprites.front_default);
}

playlist.addEventListener('click', function(){
  fetch(`https://raw.githubusercontent.com/Nmuta/playlist/master/mockups/splash_page.png`)
  .then(function(data){
    return data.json()
  }).then(results =>{
    handlePlaylist(results);
  })
})

fetch('https://raw.githubusercontent.com/Nmuta/playlist/master/mockups/playlist_page.png')
  .then((data) => {
    return data.json()
  }).then((results) => {
    console.log(results)
    playlistOutput.innerText = results.name;
    albumImage.setAttribute('src', results.sprites.front_default);
  })
