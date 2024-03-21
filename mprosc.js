function lout(){
localStorage.removeItem("Lmiut1");
alert("User Signed Out");
window.location.href="https://microintel.github.io/microintel/";
 }
  
  let x = document.getElementsByClassName('apc');
  let sw = window.innerWidth;
  let gap;
  let video = document.getElementById('vs');
  let xr=document.getElementById('apcd');
  if (sw >= 820)
  {
  xr.style.marginLeft="35%";
  gap = "3%";
  video.style.width = "70%";
  video.style.height = "60%";
  }    else if (sw >= 600)
  {
  gap = "10%";
  video.style.width = "50%";
  video.style.height = "45%";
  } 
  else
  {
  gap = "15%";
  video.style.width = "80%";
  video.style.height = "45%";
  }
  let i = 0;
  for (; i < x.length;) {
  x[i].style.marginRight= gap;
  i++;
  }
  var mi = false;
  let dr = 0;
  let aud = new Audio("click.mp3");
  let prx =`
  <div class="cmc" style="display: inline-block;padding: 20px;margin-top:40px;">
  <a href="https://microintel.github.io/cie/" >
  <div class="ccd">
  <img id="img" class="pimg" src="https://microintel.github.io/Resources/images/microevaluator.jpg">
  <center> <p class="infoOfPro">Diploma CIE Book Evaluator</p></center>
  </div>
  </a>
  
  <a href="https://microintel.github.io/Result/" >
  <div class="ccd">
  <img id="img" class="pimg" src="https://microintel.github.io/Resources/images/microresult.jpg">
  <center> <p class="infoOfPro" >Dte Result Portal[2022-24]</p></center>
  </div>
  </a>

  <a href="https://microintel.github.io/microbrowser/" >
    <div class="ccd">
    <img id="img" class="pimg" src="https://microintel.github.io/Resources/images/mbro.gif">
    <center>  <p class="infoOfPro">Secured Search Engine</p></center>
    </div>
    </a>
    
  <a href="https://microintel.github.io/Micrography/" >
  <div class="ccd">
  <img id="img" class="pimg" src="https://microintel.github.io/Resources/images/micrography.jpg">
  <center> <p class="infoOfPro">Convert Your MSG To Another Form</p></center>
  </div>
  </a>
  
  <a href="https://nikhil2005858.github.io/microdisk/new12.html" >
  <div class="ccd">
  <img id="img" class="pimg" src="https://microintel.github.io/Resources/images/microdisk.gif">
  <center> <p class="infoOfPro">For Downloading Movies,Series..</p></center>
  </div>
  </a>
  
  <a href="https://microintel.github.io/xox/" >
  <div class="ccd">
  <img id="img" class="pimg" src="https://microintel.github.io/Resources/images/microPlay.png">
  <center>  <p class="infoOfPro">Simple Game</p></center>
  </div>
  </a>


<a href="https://microintel.github.io/fscan" >
<div class="ccd">
  <img id="img" class="pimg" src="https://microintel.github.io/Resources/microscan.jpeg">
      <center>  <p class="infoOfPro">Fishing Url Scanner</p></center>
            </div></a>


<a href="https://microintel.github.io/mscan" ><div class="ccd">
  <img id="img" class="pimg" src="https://media3.giphy.com/media/y8kA4Y9OntEo8/giphy.gif?cid=6c09b952r00rux096aynbxwxx358mpdbjph3cbf6w0yifyhs&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g">
      <center>  <p class="infoOfPro">Fishing</p></center>
            </div></a>
            
            
            
            
            
            
            
            
<a href="https://microintel.github.io/passman" ><div class="ccd">
  <img id="img" class="pimg" src="https://microintel.github.io/Resources/images/passman.jpeg">
      <center>  <p class="infoOfPro">Password Creator</p></center>
            </div></a>



  
  <a href="https://microintel.github.io/microinjection/" >
  <div class="ccd">
  <img id="img" class="pimg" src="https://microintel.github.io/Resources/images/microinj.gif">
  <center>  <p class="infoOfPro">A Simple Web Injection.</p></center>
  </div>
  </a>
  

  
  <div onclick="alert('This project is still in development and it will launch soon')" class="ccd">
  <img id="img" class="pimg" src="https://microintel.github.io/Resources/images/micro_passman.jpg">
  <center>  <p class="infoOfPro">Password Manager</p></center>
  </div>

  
  <div onclick="alert('This project is still in development and it will launch soon')" class="ccd">
  <img id="img" class="pimg" src="https://microintel.github.io/Resources/images/microTunes.png">
  <center>  <p class="infoOfPro">Self healing Musics</p></center>
  </div>
  
  <div onclick="alert('This project is still in development and it will launch soon')" class="ccd">
  <img id="img" class="pimg" src="https://microintel.github.io/Resources/images/microLearn.png">
  <center>  <p class="infoOfPro">Learn Basics Of Programing</p></center>
  </div>

  
  </div>
  
  `;
  function abt() {dr = dr + 1;let aud = new Audio("click.mp3");aud.play();
  let abot = `<div style="margin-top:30px;width: 95%;padding:2%;background-color: transparent ;border-radius: 20px;font-family:serif; color:white">
  <h2 style="text-align: center;color:white"><u>About MicroIntel</u></h2>
  <br>
  <center>
  <video style="border-radius:20px;" width="190vw" height="200vh" controlsList="nodownload" poster="poster.jpg" preload="none" controls disablePictureInPicture>
  <source src="https://microintel.github.io/Resources/videos/about_mi_by_CR.mp4" type="video/mp4">
  </video>
  </center>
  <center>
  <p>Microintel.Inc is an Multinational computer software company headquartered in , Pandora.</p>
  <p>The term "microintel" is combination of "micro" and "intel", which refers to intelligence.In this sense, "microintel" could be used to describe a small amount of intelligence or knowledge.</p>
  It develops software for web development and more.
  Some of its most popular products include Micro Browser, Micrography, Microdisk, XOX Game, Result portal, Cie Calculator... </p>
  <p>Microintel was founded in 2023 by Microintel team. </p>
  <p>Microintel's products are used by number of people around the world, from creative professionals to students to everyday users. The company's software has been used to create some of the most iconic documents in history, including the Micro Browser, MicroDisk & MicroGraphy and more.</p>
  </center>
  </div>`;
  let drm = `<div style="margin-top:30px;width: 95%;padding:2%;background-color: transparent;border-radius: 20px;font-family:serif;color:white">
  <h2 style="text-align: center;color:white"><u>Asset Of Microintel</u></h2>
  <center><img src="ce.jpg" style="width:140px;height:200px;border-radius:10px;"/><br><font style="font-size:12px;">CEO OF MICROINTEL.INC</font><br></center>
  <p>Ms, Darling, CEO of the Microintel</p>
  <p>Mr, Nikil, BM-Founder-Coder-Shareholder of Microintel</p>
  <p> Mr, Vignesh, Founder-Coder-Shareholder of Microintel</p>
  <p> Mr, Raghavendra, QA Manager & Distributor of Microintel</p>
  <p> Mr, Vinay, QA Tester & Distributor of Microintel </p
  <p> Mr, Amith, Ideator, Designer of Microintel</p>
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
  let cu = `
  
  <body>
  <div style="display:flex;width:100%">
  <div style="width:80%">
  <table style="border: hidden;" id="devss">
  <tr>
  <th>  
  <div>
  <img id="i1" src="https://media1.popsugar-assets.com/files/thumbor/msjEO8oq7PWud7pFv_Cm6GR6E-U/0x1:2771x2772/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2020/03/30/878/n/1922398/eb11f12e5e825104ca01c1.02079643_/i/Robert-Downey-Jr.jpg" style="border-radius: 50%;" width="150px" height="150px">
  <h3 style="color: white;"> AMITH.GS</h3>
  <h4 style="color: white;"> Designer</h4>
  </div>
  </th>
  <th >
  <div >
  <img id="i1" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/66b7da25-ab40-4cea-90e8-162bb55e8396/d58wi61-5e461ba3-f578-48d3-b542-2eb3a1587365.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2YjdkYTI1LWFiNDAtNGNlYS05MGU4LTE2MmJiNTVlODM5NlwvZDU4d2k2MS01ZTQ2MWJhMy1mNTc4LTQ4ZDMtYjU0Mi0yZWIzYTE1ODczNjUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2NpTwqHt58xasbfTsKbzYQOVOF493FGrFbbWzM5vHxE" style="border-radius: 50%;" width="150px" height="150px">
  <h3 style="color: white;"> DHANUSH.M</h3>
  <h4 style="color: white;"> Tester</h4>
  </div>
  </th>
  </tr>
  <tr>
  <th>
  <div >
  <img id="i1" src="https://microintel.github.io/Resources/images/tom.jpg" style="border-radius: 50%;" width="150px" height="150px">
  <h3 style="color: white;"> VIGNESH</h3>
  <h4 style="color: white;"> Coder</h4>
  </div>
  </th>
  <th>
  <div >
  <img id="i1" src="https://hips.hearstapps.com/hmg-prod/images/hlh100123feacover-010-1-650dd73053c63.jpg?crop=1.00xw:0.672xh;0,0.0385xh&resize=1200:*" style="border-radius: 50%;" width="150px" height="150px">
  <h3 style="color: white;"> NIKHIL.D</h3>
  <h4 style="color: white;"> Coder</h4>
  </div>
  </th>
  </tr>
  </table>
  </div>
  <div style="width:20%;margin-top:100px">
  <div style=" width:15%; padding:5%; background-color: transparent;  border-radius: 30px; box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);">
  <div style=" margin-left:20%;">
  <a href="mailto:microfly2410@gmail.com?body=Hello Microintel support team" style="color: black;"><img class="cntus" src="https://microintel.github.io/Resources/images/gmail.png" style="height: 35px; width: 35px;"></a>
  <br><br><a href="https://instagram.com/micro_intel/" style="color: black;"><img class="cntus" src="https://microintel.github.io/Resources/images/insta.png" style="height: 42px; width: 42px;"></a>
  <br><br><a href="sms:+917411481645?body=Hello Microintel support team," style="color: black;"><img class="cntus" src="https://microintel.github.io/Resources/images/msg.png" style="height: 35px; width: 35px;"></a>
  <br><br><a href="https://wa.link/kfitog" style="color: black;"><img class="cntus" src="https://microintel.github.io/Resources/images/WhatsApp.png" style="height: 35px; width: 35px;"></a>
  </div>
  </div>
  </div>
  </div>`;
  if (mi) {document.getElementById('par').innerHTML = '';}
  else {document.getElementById('par').innerHTML = cu;}
    }
