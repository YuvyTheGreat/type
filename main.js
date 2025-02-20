let numbeR = 1;

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

setInterval( function() { 
  
  var delta = Date.now() - start;
  timesec = Math.floor(delta / 1000);
  time.textContent = (timesec);
  
}, 500);

const speeddiv = document.getElementById("averagespeed")

setInterval ( function () {
  let averagespeed = highscore/timesec;
  speeddiv.textContent = averagespeed;
}
,160)
