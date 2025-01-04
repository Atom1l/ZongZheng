//========= Make volume slider can control ==========//
document.addEventListener("DOMContentLoaded", function () {
    const volumeSlider = document.getElementById("volume-slider");
    
    volumeSlider.addEventListener("input", function () {
        const newVolume = volumeSlider.value;
        const mediaElements = document.querySelectorAll("video, audio");

        mediaElements.forEach(function (media) {
            media.volume = newVolume;
        });
    });
});

// //========= make play button sync the video ==========//
// document.addEventListener("DOMContentLoaded", function () {
//     const playbutton = document.getElementById('pd-vid-button');
//     const video = document.getElementById('pd-video');
//     let isPlaying = false;

//     playbutton.addEventListener('click', function(){
//         if(isPlaying){
//             video.pause();
//             playbutton.src = "SRC/Production/PLAY-BUTTON.png";
//         }
//         else{
//             video.play();
//             playbutton.src= "SRC/Production/PAUSE-BUTTON.png";
//         }
//         isPlaying = !isPlaying;
//     });
// });

// //========= double click to enter full screen ==========//
// document.addEventListener("DOMContentLoaded", function () {
//     const video = document.getElementById('pd-video');

//     video.addEventListener('dblclick', function () {
//         if (document.fullscreenElement) {
//             document.exitFullscreen(); 
//         } else {
//             video.requestFullscreen(); 
//         }
//     });
// });

//========= button to channelup-down ==========//
let currentFilmIndex = 0;
const films = document.querySelectorAll('.short-film');
const totalFilms = films.length;

function showFilm(index) {
    films.forEach((film, i) => {
        if (i === index) {
            film.style.display = 'block';
        } else {
            film.style.display = 'none';
        }
    });
}

document.querySelector('.channel-up').addEventListener('click', () => {
    currentFilmIndex = (currentFilmIndex - 1 + totalFilms) % totalFilms;
    showFilm(currentFilmIndex);
});

document.querySelector('.channel-down').addEventListener('click', () => {
    currentFilmIndex = (currentFilmIndex + 1) % totalFilms;
    showFilm(currentFilmIndex);
});

showFilm(currentFilmIndex);



