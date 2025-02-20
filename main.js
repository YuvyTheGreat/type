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





