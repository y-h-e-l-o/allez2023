//let btn = document.getElementsByClassName("change");



window.addEventListener("load", setup);


function setup(){

const nik = document.querySelector("#nik");

nik.addEventListener("click", changerFond, false);

function changerFond (){
	let chiffre = getRandomIntInclusive(1,12);
	document.body.style.backgroundImage = "url('petites/pintur"+chiffre+".jpg')";
	console.log(chiffre);
	}
}





/*
btn.addEventListener("click", function(){
	document.body.style.background = "red";
	});
	
	
	
function liste(e){
	var liste = document.querySelector(".liste")
	for (i=1; i<19; i++){
		var objetsListe = document.createElement("li");
		liste.appendChild(objetsListe);
		span = document.createElement("button");
		objetsListe.appendChild(span);
		span.innerHTML="pintur "+[i];
		
		}	
}*/
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

/*
  //Image = "url('pintur"getRandomFromTo (1, 19)".jpg')";
*/
