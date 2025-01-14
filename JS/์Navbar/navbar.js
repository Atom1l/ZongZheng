/*Hide nav bar at first */

window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      document.getElementById("navbar").style.top = "0";
      //sidebar.style.paddingTop = '70px';//
      } else {
        document.getElementById("navbar").style.top = "-110px";
        //sidebar.style.paddingTop = '0px';//
        }
};
scrollFunction();