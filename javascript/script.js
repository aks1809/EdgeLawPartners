//W3 Schools setCookie function
function setCookie(c_name,value,exdays)
{
  var exdate=new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
  document.cookie = c_name + "=" + c_value;
}

//W3 Schools getCookie function
function getCookie(c_name)
{
  var c_value = document.cookie;
  var c_start = c_value.indexOf(" " + c_name + "=");
  if (c_start == -1)
  {
    c_start = c_value.indexOf(c_name + "=");
  }
  if (c_start == -1)
  {
    c_value = null;
  }
  else
  {
    c_start = c_value.indexOf("=", c_start) + 1;
    var c_end = c_value.indexOf(";", c_start);
    if (c_end == -1)
    {
      c_end = c_value.length;
    }
  c_value = unescape(c_value.substring(c_start,c_end));
 }
return c_value;
}

//Check return_visit cookie on page load
function bodyOnload()
{
if(getCookie("return_visit") === 'true' || sessionStorage.returnVisit === "true"){
    //can be used for welcome back
}
else
{
    document.getElementById("once").style.display="block";
    document.body.style.overflow='hidden';
    if(typeof(Storage) !== "undefined"){
        sessionStorage.returnVisit = "true";
    }
    else{
        setCookie("return_visit","true",1);
    }
}
}
function hide(){
    document.getElementById("once").style.display="none";
    document.body.style.overflowY="visible";
}
var offsetHeight = document.getElementById('top').offsetHeight-95;
var slideIndex = 1;
showSlides(slideIndex);
// navbar
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > offsetHeight || document.documentElement.scrollTop > offsetHeight) {
    document.getElementById("drop").style.top = "0";
    document.getElementById("social").style.left="0";
  } else if(document.body.scrollTop < offsetHeight || document.documentElement.scrollTop < offsetHeight){
    document.getElementById("drop").style.top = "-70px";
    document.getElementById("social").style.left="-60px";
    document.getElementById("menu-btn").checked = false;
  }
}
//slide show
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;

  var slides = document.querySelectorAll(".slides");
  var pp = slides[slideIndex-1].querySelector(".vl");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
// Input Lock
$(document).ready(function() {
  // Social Media Collapse
$('#sm-close').click(function(){
  $('.s-media').addClass('sm-collapse');
      $('#sm-open').delay(300).css('left', '0');
});
$('#sm-open').click(function(){
    $('#sm-open').css('left', '-60px');
    $('.s-media').removeClass('sm-collapse');
});

  // END Click Function
});// END DOCUMENT.Ready
function uncheck(){
  document.getElementById("menu-btn").checked = false;
}
var fixed = document.getElementById('fixed');
