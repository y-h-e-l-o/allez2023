
function masquer(id){
	
	let bebe = document.getElementsByClassName('enfant');
	let n = document.getElementById(id).style.display;
	let i;
	console.log(bebe);
	
	for (i=0; i<bebe.length; i++){
		bebe[i].style.display="none";
		}
	if (n == 'none' || n=='')
  {
       document.getElementById(id).style.display = 'block';
  }
  else
  {
       document.getElementById(id).style.display = 'none';
  }
}
