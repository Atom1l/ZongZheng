/*Hide nav bar at first */
window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-115px";
        }
};
scrollFunction();