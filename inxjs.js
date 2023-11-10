let sup = `<center><h2>Welcome to MicroIntel</h2><h4>Where Innovation Meets Intelligence!</h4></center><div><h2>New User?<br>Sign Up</h2>
<center><form onsubmit="signup()">
   <input type="text" id="uname" placeholder="enter full name" required><br>
   <input type="text" id="uid" placeholder="enter to create user id" required><br>
   <input type="password" id="upass" placeholder="enter password" required><br>
   <input type="text" id="umail" placeholder="enter email holder" required><br>
   <br><br>
   <input type="submit">
</form></center></div>`;

let logi = `<center><h2>Welcome to MicroIntel</h2><h4>Where Innovation Meets Intelligence!</h4></center><div><center><h3>Sign In to <b>MicroIntel</b></h3></center>
<center><form onsubmit="login()">
   <input type="text" id="luid" placeholder="enter user id" required>
   <input type="password" id="lupass" placeholder="enter password" required>
   <br><br>
   <input type="submit">
</form></center></div>`;

function signup() {
    let Fname = document.getElementById('uname').value;
    let Uid = document.getElementById('uid').value;
    let Upass = document.getElementById('upass').value;
    let Umail = document.getElementById('umail').value;

    let miuserinfo = Fname + '/' + Uid + '|' + Upass + '$' + Umail;
    let indfsub = miuserinfo.indexOf("/");
    let indssub = miuserinfo.indexOf("|");
    let indtsub = miuserinfo.indexOf("$");

    localStorage.setItem("miut1", miuserinfo);
   alert("User Account Created Scuessfully\n Just Sign in to MicroIntel");
}

function login() {
    let LUid = document.getElementById('luid').value;
    let LUpass = document.getElementById('lupass').value;

    let Lmiuserinfo = LUid + '/' + LUpass;

    localStorage.setItem("Lmiut1", Lmiuserinfo);
    document.getElementById("input").innerHTML = logi;
    window.location.href="https://microintel.github.io/microintel/micropro.html";
}

function get() {
    let getMS = localStorage.getItem("miut1");
    let getML = localStorage.getItem("Lmiut1");
   //document.write(getMS);
    if ((String(getMS)==String('null'))){
        document.getElementById("input").innerHTML = sup;
    } else if((String(getML)==String('null'))){
        document.getElementById("input").innerHTML = logi;
    }
      else{
window.location.href="https://microintel.github.io/microintel/micropro.html";
          }
}
