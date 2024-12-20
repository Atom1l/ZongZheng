const cloud_left = document.getElementById('cloud_left');
const cloud_right = document.getElementById('cloud_right');
const homelogo = document.getElementById('home-logo');

function applyParallax() {
    let value = window.scrollY;

    // Adjust positions based on scroll value
    cloud_left.style.transform = `translate(${value * -2}px, -50%)`;
    cloud_right.style.transform = `translate(${value * 2}px, -50%)`;
    homelogo.style.transform = `translateY(${value * 0.5}px)`;
}

// Apply parallax on page load
window.addEventListener('load', applyParallax);
// Update parallax positions on scroll
window.addEventListener('scroll', applyParallax);


var input = document.getElementById("searchbar");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("searchbutton").click();
  }
});

/*onclick="window.location.href='Homepage.html'"; Comman for click link */
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