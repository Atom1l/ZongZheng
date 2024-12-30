//========= Sky Parallax ==========//
const cloud_left = document.getElementById('cloud_left');
const cloud_right = document.getElementById('cloud_right');
const homelogo = document.getElementById('home-logo');
const bird = document.getElementById('bird');
function applyParallax() {
    let value = window.scrollY;
    cloud_left.style.transform = `translate(${value * -2}px, -50%)`;
    cloud_right.style.transform = `translate(${value * 2}px, -50%)`;
    homelogo.style.transform = `translateY(${value * 0.2}px)`;

    if (value > 1000) {
      let adjustedValue = value - 1000; // Start counting from 0 after 100px
      bird.style.transform = `translate(${adjustedValue * 1.2}px, ${adjustedValue * 0.6}px)`;
  } else {
      // Keep the bird at its initial position
      bird.style.transform = `translate(0, 0)`;
  }
}
// Apply parallax on page load
window.addEventListener('load', applyParallax);
// Update parallax positions on scroll
window.addEventListener('scroll', applyParallax);

//========= Bird Parallax ==========//
// const bird = document.getElementById('bird');
// function applyParallax() {
//     let value = window.scrollY;
//     bird.style.transform = `translate(${value * 0.5}px, ${value * 0.5}px)`;
// }
// window.addEventListener('load', applyParallax);
// window.addEventListener('scroll', applyParallax);

//========= Searhbox billboard ==========//
var input = document.getElementById("searchbar");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("searchbutton").click();
  }
});

//========= Redirect to website ==========//
function redirectToWebsite() {
  var inputFieldValue = document.getElementById('searchbar').value;
  if (inputFieldValue.toLowerCase() === 'production') {
      inputFieldValue.value ="Production";
      window.location.href = 'testnavbar.html';
  } else if(inputFieldValue.toLowerCase() === 'graphic'){
      inputFieldValue.value = "Graphic";
      window.location.href = '';
  } else if(inputFieldValue.toLowerCase() === 'sound'){
    inputFieldValue.value = "Sound";
    window.location.href = '';
  } else if(inputFieldValue.toLowerCase() === 'digital arts'){
    inputFieldValue.value = "Digital Arts";
    window.location.href = 'wawun/Work_graphic.html#Gall-Ahref';
  } else if(inputFieldValue.toLowerCase() === 'animation/motion'){
    inputFieldValue.value = "";
    window.location.href = 'Zongzheng - work animation/Zongzheng-Animation.html';
  } else if(inputFieldValue === 'โปรดักชัน'){
    window.location.href = '';
  } else if(inputFieldValue === 'กราฟิก'){
    window.location.href = '';
  } else if(inputFieldValue === 'เสียง'){
    window.location.href = '';
  } else if(inputFieldValue === 'ดิจิทัล อาร์ต'){
    window.location.href = 'wawun/Work_graphic_TH.html#Gall-Ahref';
  } else if(inputFieldValue === ''){
    window.location.href = '';
  }
   else{
    alert('Please select or type like a topic below.');
  }
};

//========= Sound Playing ==========//
document.addEventListener("DOMContentLoaded", function () {
  const playPauseButton = document.getElementById("play-button");
  const audio = document.getElementById("sound-music");

  let isPlaying = false;

  playPauseButton.addEventListener("click", function () {
      if (isPlaying) {
          audio.pause();
          audio.currentTime = 0;
          playPauseButton.src = "SRC/Index/PLAY-BUTTON-SOUND.png";
      } else {
          audio.play();
          playPauseButton.src = "SRC/Index/PAUSE-BUTTON-SOUND.png"; 
      }

      isPlaying = !isPlaying;
  });
});

//========= Email Copying ==========//
function EmailCopying(){ 
  /* Copy text into clipboard */ 
  navigator.clipboard.writeText("zongzhen.inc@gmail.com"); 
  document.getElementById('email-btn').value = 'Copied!'; 
} 

function MouseoutEmail(){
  document.getElementById('email-btn').value = "(Email)"; 
}

//========= Tel Copying ==========//
function TelCopying(){
  navigator.clipboard.writeText("+662123456789");
  document.getElementById('tel-btn').value = 'Copied!';
}

function MouseoutTel(){
  document.getElementById('tel-btn').value = '+662123456789';
}
