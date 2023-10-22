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
  let prx =`<div style="margin-top:100px;">
  <center><a href="https://microintel.github.io/cie/" > <button style="background-color: transparent;color: white;border: 2px solid white;padding: 10px 20px;border-radius: 5px;font-size: 16px;font-family: fantasy;" onclick="mpa()">DIPLOMA CIE BOOK EVALUATOR</button></a>
  <br><br><a href="https://microintel.github.io/Result/" > <button style="background-color: transparent;color: white;border: 2px solid white;padding: 10px 20px;border-radius: 5px;font-size: 16px;font-family: fantasy;" onclick="mpa()">Diploma Result [ch-nagar]</button></a></center></div>
  <br><a href="https://microintel.github.io/Micrography/" > <button style="background-color: transparent;color: white;border: 2px solid white;padding: 10px 20px;border-radius: 5px;font-size: 16px;font-family: fantasy;" onclick="mpa()">Micrography</button></a></center></div>
  <br><br>
  <a href="https://microintel.github.io/Microdisk/" > <button style="background-color: transparent;color: white;border: 2px solid white;padding: 10px 20px;border-radius: 5px;font-size: 16px;font-family: fantasy;" onclick="mpa()">MicroDisk</button></a></center></div>
  
  `;
  function abt() {dr = dr + 1;let aud = new Audio("click.mp3");aud.play();
  let abot = `<div style="margin-top:30px;width: 95%;padding:2%;background-color: transparent ;border-radius: 20px;font-family:serif; color:white">
  <h2 style="text-align: center;color:white"><u>About MicroIntel</u></h2>
  <p>Microintel.Inc is an Multinational computer software company headquartered in , Pandora.</p>
  <p>The term "microintel" could also be a portmanteau of "micro" and "intel", which refers to intelligence.In this sense, "microintel" could be used to describe a small amount of intelligence or knowledge.</p>
  It develops software for web development and more.
  Some of its most popular products include Login Autentication, Result portal, InDesign, Cie Calculator... </p>
  <p>Microintel was founded in 2023 by Microintel team. </p>
  <p>Microintel's products are used by 5+You of people around the world, from creative professionals to students to everyday users.The company's software has been used to create some of the most iconic documents in history, including the Result portal,Cie Calculator and more.</p>
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
  <p>Mr, Charan ,imaginative Kid of Microintel</p>
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
  <table style="border: hidden;">
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
  <img id="i1" src="https://microintel.github.io/Resources/images/babygrrot.jpg" style="border-radius: 50%;" width="150px" height="150px">
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
  <a href="mailto:microfly2410@gmail.com?body=Hello Microintel support team" style="color: black;"><img class="cntus" src="gmail.png" style="height: 35px; width: 35px;"></a>
  <br><br><a href="https://instagram.com/micro_intel/" style="color: black;"><img class="cntus" src="insta.png" style="height: 42px; width: 42px;"></a>
  <br><br><a href="sms:+919380579439?body=Hello Microintel support team," style="color: black;"><img class="cntus" src="msg.png" style="height: 35px; width: 35px;"></a>
  <br><br><a href="https://wa.link/kfitog" style="color: black;"><img class="cntus" src="WhatsApp.png" style="height: 35px; width: 35px;"></a>
  </div>
  </div>
  </div>
  </div>`;
  if (mi) {document.getElementById('par').innerHTML = '';}
  else {document.getElementById('par').innerHTML = cu;}
    }
