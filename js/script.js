
window.onload = function(){
	
	setInterval(nextBackround, 5000);
	
}
	
function nextBackround(){
		
	let arr = document.getElementsByTagName('header');
	let elem = arr[0];
		
	if(elem.style.backgroundImage === 'url("../konstruct-template/images/background.png")' || elem.style.backgroundImage === ""){
		elem.style.backgroundImage = 'url("../konstruct-template/images/background2.png")';
	} else if(elem.style.backgroundImage === 'url("../konstruct-template/images/background2.png")'){
		elem.style.backgroundImage = 'url("../konstruct-template/images/background3.png")';
	} else{
		elem.style.backgroundImage = 'url("../konstruct-template/images/background.png")';
	}
			
}

