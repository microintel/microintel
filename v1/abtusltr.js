let tchi =false;
let stX =0;
const swd = window.innerWidth;
document.addEventListener('touchstart', function(event) {
   const touch = event.touches[0];
   tchi = true;
  stX = touch.clientX;});

document.addEventListener('touchmove', function(event) {
  if (tchi){
             const touch = event.touches[0];
           const dmd = touch.clientX - stX;
 if (stX < swd / 4 && dmd > swd / 4) {
location.href="contactus.html";
   tchi = false;
 }
if (stX >= swd /4 && dmd < -swd /4) {
location.href="micropro.html";
  tchi = false;
 } 
 }});
 document.addEventListener('touchend', function() {
           document.getElementById("u44").style.color="white";
           tchi = false;
       });