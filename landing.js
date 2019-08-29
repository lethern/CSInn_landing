
document.addEventListener("DOMContentLoaded", onload);

function onload(){
	setupBackgroundSpecial();
};

var x=0;
function setupBackgroundSpecial(){
	if(x++ > 10) return;
	console.log('setupBackgroundSpecial');
	//let delay_ms = randomInRange( 3000, 6000 );
	let delay_ms = randomInRange( 1000, 2000 );
	//let delay_ms = 1;
	setTimeout( drawBackgroundSpecial, delay_ms );
};

function drawBackgroundSpecial(){
	let wrapper = createDiv( document.body, ['animExpandRect', 'bckSpecial']);
	wrapper.style.top = randomInRange(5, 75)+'%';
	var horizontal = randomInRange(15, 85);
	if(horizontal > 50){
		wrapper.style.right = (85-horizontal)+'%';
	}else{
		wrapper.style.left = (horizontal-15)+'%';
	}
	console.log('drawBackgroundSpecial');
	
	setupBackgroundSpecial();
};

function randomInRange(min, max){
	return Math.random() * (+max - +min) + +min;
};

function createDiv(parent, _class){
	let div = document.createElement('div');
	addClasses(div, _class);
	parent.appendChild(div);
	return div;
};

function addClasses(elem, classes){
	if(classes){
		if(isArray(classes)){
			for(let _c of classes)
				elem.classList.add(_c);
		}else{
			elem.classList.add(classes);
		}
	}
}

function isArray(obj) {
	return Object.prototype.toString.call(obj) === '[object Array]';
};