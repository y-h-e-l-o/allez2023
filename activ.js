
window.addEventListener("load", setup);


function setup(){

const nik = document.querySelector("#tout");
const background = document.querySelector(".blur");

nik.addEventListener("click", changerFond, false);

function changerFond (){
	let chiffre = getRandomIntInclusive(3,8);
	background.style.backgroundImage = "url('petites/pintur"+chiffre+".jpg')";
	console.log(chiffre);
	}
}





//========================== utilitaires random

function getRandomFromTo(from, to) {
  const rando2 = Math.floor(Math.random() * (to - from + 1)) + from;
  return rando2;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

