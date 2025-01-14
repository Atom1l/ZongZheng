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

//========= button to channelup-down ==========//
document.getElementById('sidebar-btn').addEventListener('click', function () {
    const icon = this.querySelector('span'); // Select the child <span> inside the parent div
    // Check if the <span> has the class 'fa-angle-right'
    if (icon.classList.contains('fa-angle-right')) {
        icon.classList.remove('fa-angle-right');
        icon.classList.add('fa-angle-left');
    } else {
        icon.classList.remove('fa-angle-left');
        icon.classList.add('fa-angle-right');
    }
});

//========= Sidebar ==========//
const sidebarbtn = document.getElementById('sidebar-btn');
const sidebar = document.getElementById('sidebar');
let isSidebarOpen = false;

sidebarbtn.addEventListener('click', function () {
    if (isSidebarOpen) { // Close the sidebar //
        sidebarbtn.style.left = '0%';
        sidebar.style.left = '-300px';
    } else { // Open the sidebar //
        const currentLeft = parseInt(sidebarbtn.style.left, 10) || 0;
        sidebarbtn.style.left = `${currentLeft + 300}px`;
        sidebar.style.left = '0';
    }
    isSidebarOpen = !isSidebarOpen;
});
//========= Show-info ==========//
document.querySelectorAll('.toggle-child').forEach(parent => {
    parent.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default behavior of links
        const childMenu = this.nextElementSibling; // Get the associated child menu
        if (childMenu.classList.contains('hidden')) {
            childMenu.classList.remove('hidden'); // Show the menu
        } else {
            childMenu.classList.add('hidden'); // Hide the menu
        }
    });
});

