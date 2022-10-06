//onload function and contents added form my "interactive recipe codepen https://codepen.io/mariahdawn9/pen/XWqqPMK 

window.onload = function(){

document.querySelector("#header h1").classList.add("makeBig"); //changes title on page  ``
  
document.querySelector("#header h1").onclick = function() {
  this.classList.toggle("makeWhite");
  } // toggles title color on page

document.querySelector("#ingredients h4").onclick = function() {
   document.querySelector("#ingredients ul").style.display = "block";
  document.querySelector("#ingredients p").style.display = "block";
 } //displays ingredients 

 document.querySelector("#equipment h4").onclick = function() {
   document.querySelector("#equipment ul").style.display = "block";
 } //displays equipment 
 
 document.querySelector("#directions h4").onclick = function() {
   document.querySelector("#directions ol").style.display = "block";
  document.querySelector("#directions p").style.display = "block";
 } //displays directions
 
 document.querySelector("#ingredients ul").innerHTML +="<li>Love!</li>";
}
//end of window on load