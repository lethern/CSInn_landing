
document.addEventListener("DOMContentLoaded", onload);

function onload(){
	setupBackgroundSpecial();
};

function setupBackgroundSpecial(){
	console.log('setupBackgroundSpecial');
	let delay_ms = randomInRange( 2000, 4000 );
	//let delay_ms = randomInRange( 1000, 2000 );
	//let delay_ms = 1;
	setTimeout( drawBackgroundSpecial, delay_ms );
};

function drawBackgroundSpecial(){
	let wrapper = createDiv( document.body, 'specialWrapper' );
	wrapper.style.top = randomInRange(5, 75)+'%';
	var horizontal = randomInRange(15, 85);
	if(horizontal > 50){
		wrapper.style.right = (85-horizontal)+'%';
	}else{
		wrapper.style.left = (horizontal-15)+'%';
	}
	
	
	let titlebar = createDiv( wrapper, ['animExpandRect', 'specialTitlebar'] );
	
	setTimeout( drawBackgroundSpecial_body, 650, {wrapper, titlebar} );
};

function drawBackgroundSpecial_body(divs){
	divs.body = createDiv( divs.wrapper, ['animExpandRect', 'specialBody'] );
	
	setTimeout(drawBackgroundSpecial_action, 700, divs);
};

function drawBackgroundSpecial_action(divs){
	//divs.body.textContent = 'hi\nhi';
	
	//var text = document.getElementById('text');
	//var newDom = '';
	const animationDelay = 350;
	let text = getRandomText();
	text = '<span>' + text.split('\n').join('</span><span>') + '</span>';
	text = text.split(' ').join('&nbsp;');
	
	let fragment = document.createElement('div');
	fragment.innerHTML = text;
	
	let children = fragment.children;
	for(let i=0, len=children.length; i<len; ++i){
		children[i].style['animation-delay'] = i*animationDelay + 'ms';
	}
	
	divs.body.appendChild(fragment);

	addClasses(divs.body, 'animFadeInText');
	
	let delay_ms = randomInRange( 3000, 4000 );
	delay_ms += children.length * animationDelay;
	setTimeout(drawBackgroundSpecial_hide, delay_ms, divs);
};

function drawBackgroundSpecial_hide(divs){
	divs.wrapper.innerHTML = '';
	setupBackgroundSpecial();
};

function getRandomText(){
	let arr= ['.specialTitlebar{\n   background-color:\n      rgb(94, 120, 213);\n   width: 150px;\n   height: 20px;\n   animation:\n      animExpandTitle 0.7s\n      ease-in-out;\n}'];
	return arr[0];
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