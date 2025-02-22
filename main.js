var numbeR = 1;
let tempnum = numbeR;

if (localStorage.getItem("track")==='undefined') {
  localStorage.setItem("bankaccount",0)
}

localStorage.setItem("track","y")

const pElement = document.getElementById("num");
const audio = document.getElementById("type");

document.addEventListener('keyup', function(event) {
  
numbeR++; 
console.log(numbeR);
pElement.innerHTML = numbeR;

const audioClone = new Audio(audio.src); 
audioClone.play();
});

const highscorespan = document.getElementById("mosttypesspan");
let highscore = localStorage.getItem("highscore");
 
function setscore() {

  highscorespan.textContent = highscore;
  
  if (highscore === null) {
    localStorage.setItem("highscore",1);
  }
  
  if(highscore != null) {
    if(numbeR > highscore) {
      localStorage.setItem("highscore", numbeR);
      highscore = localStorage.getItem("highscore")
    }
}}

setInterval (setscore,1000);

const start = Date.now(); 
const time = document.getElementById("mosttimespan");

let timesec;
setInterval( function() { 
  
  var delta = Date.now() - start;
  timesec = Math.floor(delta / 1000);
  time.textContent = (timesec);
  
}, 500);

const totalspan = document.getElementById("totaltypes");

let bankaccount = localStorage.getItem("bankaccount");

let initialaccount = localStorage.getItem("bankaccount");
totalspan.textContent = initialaccount

let increase;

function deposit2() {

const intervalId = setInterval (() => {
    let bankaccount = parseFloat(localStorage.getItem("bankaccount"));

    console.log("working2")
    
    bankaccount++;
    numbeR--;
    totalspan.textContent = bankaccount;
    
    pElement.innerHTML = numbeR;
    console.log(numbeR);
  
    localStorage.setItem("bankaccount", bankaccount);
    console.log(numbeR, bankaccount);
  
    if (numbeR === 0) {
      clearInterval(intervalId);
    }
  
},50)
  
}

var ptotal = document.getElementById("total");
document.getElementById("deposit").addEventListener("click", deposit2);
