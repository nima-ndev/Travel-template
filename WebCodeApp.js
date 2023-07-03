// JavaScript Document

let information= document.querySelector('.readmore');
//let informationcontent=document.querySelector('.readmore i');

function readInformation(){
	if(information.style.display=="none"){
		information.style.display="flex";
	}
	else{
		information.style.display="none";
	}
	
}