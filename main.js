var numbeR = 1;
let multiplier = 1;
let bankaccount = parseFloat(localStorage.getItem("bankaccount")) || 0;
let idleadd = parseFloat(localStorage.getItem("idleadd")) || 0

const pElement = document.getElementById("num");
const audio = document.getElementById("type");
const totalspan = document.getElementById("totaltypes");
const highscorespan = document.getElementById("mosttypesspan");
const time = document.getElementById("mosttimespan");

const start = Date.now();

if (!localStorage.getItem("idleadd")) {
  localStorage.setItem("idleadd",0);
  console.log(localStorage.getItem("idleadd"));
}

function idlebankset() {
 numbeR += idleadd; 
 pElement.innerHTML = numbeR;
}

function idleset10() {
  if (bankaccount > 1000) {
    bankaccount -=1000;
    totalspan.textContent = bankaccount;
    localStorage.setItem("bankaccount",parseFloat(bankaccount))
    
    idleadd+=1;
    localStorage.setItem("idleadd",parseFloat(idleadd))
  }
}

function idleset10() {
  if (bankaccount > 1000) {
    bankaccount -=1000;
    totalspan.textContent = bankaccount;
    localStorage.setItem("bankaccount",parseFloat(bankaccount))
    
    idleadd+=1;
    localStorage.setItem("idleadd",parseFloat(idleadd))
  }
}

function idleset20() {
  if (bankaccount > 2000) {
    bankaccount -=2000;
    totalspan.textContent = bankaccount;
    localStorage.setItem("bankaccount",parseFloat(bankaccount))
    
    idleadd+=2;
    localStorage.setItem("idleadd",parseFloat(idleadd))
  }
}

function idleset30() {
  if (bankaccount > 3000) {
    bankaccount -=1000;
    totalspan.textContent = bankaccount;
    localStorage.setItem("bankaccount",parseFloat(bankaccount))
    
    idleadd+=1;
    localStorage.setItem("idleadd",parseFloat(idleadd))
  }
}


let tenidle = document.getElementById("tenidle");

tenidle.addEventListener("click",idleset10)

setInterval (idlebankset,100);

// Set multiplier based on localStorage
if (localStorage.getItem("multiplier")) {
  multiplier = parseInt(localStorage.getItem("multiplier"));
  console.log("setsome");
} else {
  localStorage.setItem("multiplier", 1);
  console.log("set1");
}

// Update multiplier in localStorage
function updateMultiplier(newMultiplier) {
  multiplier = newMultiplier;
  localStorage.setItem("multiplier", newMultiplier);
  console.log("Multiplier set to", newMultiplier);
}

function mult() {
  document.getElementById("x2").addEventListener('click', function(event) {
    if(bankaccount>20000) {
      bankaccount -= 20000;
      updateMultiplier(2);
    }
    
    else {
      console.log("NOT ENOUGH. MULTIPLIERS AREN'T FREE YOU *&(*@&(")
    }
  });

  document.getElementById("x4").addEventListener('click', function(event) {
    if(bankaccount>40000) {
      bankaccount -= 40000;
      updateMultiplier(4);
    }
    else {
      console.log("NOT ENOUGH. MULTIPLIERS AREN'T FREE YOU *&(*@&(")
    }
  });
}

mult();

// Highscore logic
let highscore = parseInt(localStorage.getItem("highscore")) || 1;
highscorespan.textContent = highscore;

function setscore() {
  if (numbeR > highscore) {
    localStorage.setItem("highscore", numbeR);
    highscore = numbeR;
  }
  highscorespan.textContent = highscore;
}

setInterval(setscore, 1000);

// Time tracking
let timesec;
setInterval(function() {
  var delta = Date.now() - start;
  timesec = Math.floor(delta / 1000);
  time.textContent = timesec;
}, 500);

// Update bank account
totalspan.textContent = bankaccount;

function deposit2() {
  const intervalId = setInterval(() => {
    if (numbeR > 0) {
      bankaccount++;
      numbeR--;
      localStorage.setItem("bankaccount", bankaccount);
      totalspan.textContent = bankaccount;
      pElement.innerHTML = numbeR;
      console.log(numbeR, bankaccount);
    } else {
      clearInterval(intervalId);
    }
  }, 1);
}

document.getElementById("deposit").addEventListener("click", deposit2);

document.addEventListener('keyup', function(event) {
  numbeR += 1 * multiplier;
  console.log(numbeR);
  pElement.innerHTML = numbeR;

  const audioClone = new Audio(audio.src);
  audioClone.play();
});
// Ensure the initial bank account value is stored
if (isNaN(bankaccount)) {
  localStorage.setItem("bankaccount", 0);
  bankaccount = 0;
}
