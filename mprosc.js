var mi = false;
let dr = 0;
let aud = new Audio("click.mp3");
let prx =`<div style="margin-top:100px;">
   <center><a href="https://microintel.github.io/cie/" > <button style="background-color: transparent;color: white;border: 2px solid white;padding: 10px 20px;border-radius: 5px;font-size: 16px;font-family: fantasy;" onclick="mpa()">DIPLOMA CIE BOOK EVALUATOR</button></a>
   <br><br><a href="https://microintel.github.io/Result/" > <button style="background-color: transparent;color: white;border: 2px solid white;padding: 10px 20px;border-radius: 5px;font-size: 16px;font-family: fantasy;" onclick="mpa()">Diploma Result [ch-nagar]</button></a></center></div>
   <br><center>
   <h4 style="color:white;font-family:fantasy;">Preview of the next project</h4>
   <br><video width="100%" height="210px" style="border-radius:70px;border:1px solid brown;" controls autoplay>
   <source src="mdisk.mp4" type="video/mp4"></video>
   <h5 style="color:white;font-family:fantasy;">Project Micro Disk will be implemented on Nov 1, 2023</h5></center>`;
if (false) {document.getElementById("par").innerHTML = " ";} 
else {document.getElementById("par").innerHTML = prx;}
function abt() {dr = dr + 1;let aud = new Audio("click.mp3");aud.play();
    let abot = `<div style="margin-top:30px;width: 95%;padding:2%;background-color: white;opacity: 0.7;border-radius: 20px;font-family:serif;">
    <h2 style="text-align: center;color:black"><u>About MicroIntel</u></h2>
    <p>Microintel.Inc is an Multinational computer software company headquartered in , Pandora.</p>
    <p>The term "microintel" could also be a portmanteau of "micro" and "intel", which refers to intelligence.In this sense, "microintel" could be used to describe a small amount of intelligence or knowledge.</p>
    It develops software for web development and more.
    Some of its most popular products include Login Autentication, Result portal, InDesign, Cie Calculator... </p>
    <p>Microintel was founded in 2023 by Microintel team. </p>
    <p>Microintel's products are used by 5+You of people around the world, from creative professionals to students to everyday users.The company's software has been used to create some of the most iconic documents in history, including the Result portal,Cie Calculator and more.</p>
    </div>`;
    let drm = `<div style="margin-top:30px;width: 95%;padding:2%;background-color: white;opacity: 0.7;border-radius: 20px;font-family:serif;">
    <h2 style="text-align: center;color:black"><u>Asset Of Microintel</u></h2>
    <center><img src="ceo.jpg" style="width:140px;height:200px;border-radius:10px;"/><br><font style="font-size:12px;">CEO OF MICROINTEL.INC</font><br></center>
    <p>Ms, Darling, CEO of the Microintel</p>
    <p>Mr, Nikil, BM-Founder-Coder-Shareholder of Microintel</p>
    <p> Mr, Vignesh, Founder-Coder-Shareholder of Microintel</p>
    <p> Mr, Raghavendra, QA Manager & Distributor of Microintel</p>
    <p> Mr, Vinay, QA Tester & Distributor of Microintel </p>
    <p> Mr, Amith, Asset of Microintel</p>
    <p> Mr, Dhanush, Asset of Microintel</p>
    </div>`;
    if (dr == 5) {document.getElementById('par').innerHTML = drm;}
    else {if (mi) {document.getElementById('par').innerHTML = '';}else {document.getElementById('par').innerHTML = abot;}}
}
function mpa(){ let aux=new Audio("click.mp3");aux.play();}
let pi = false;
function pro() {let aud = new Audio("click.mp3");aud.play();
    if (mi) {document.getElementById('par').innerHTML = ''; }
    else {document.getElementById('par').innerHTML = prx;}}
function con() {let aud = new Audio("click.mp3");aud.play();
    let cu = `<div style="margin-top:30px; margin-left:65%; width:15%; padding:5%; background-color: white; opacity: 0.6; border-radius: 30px; box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);">
    <div style="text-align: center; margin-top: 10px;">
    <a href="mailto:microfly2410@gmail.com" style="color: black;"><img src="gmail.png" style="height: 35px; width: 35px;"></a>
    <br><a href="tel:+919380579439" style="color: black;"><img src="call.png" style="height: 35px; width: 35px;"></a>
    <br> <a href="https://instagram.com/wag_2005/" style="color: black;"><img src="insta.png" style="height: 42px; width: 42px;"></a>
    <br><a href="https://www.threads.net/@wag_2005" style="color: black;"><img src="threads.png" style="height: 35px; width: 35px;"></a>
    <br><a href="https://wa.link/kfitog" style="color: black;"><img src="WhatsApp.png" style="height: 35px; width: 35px;"></a>
    </div>
    </div>`;
    if (mi) {document.getElementById('par').innerHTML = '';}
    else {document.getElementById('par').innerHTML = cu;}
}
