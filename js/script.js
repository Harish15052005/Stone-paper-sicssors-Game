// let's for changing NA
let pap = document.getElementById('pap');
let sci = document.getElementById('sci');
let sto = document.getElementById('sto');
let imghuman = document.getElementById('imghuman');
let imgbot = document.getElementById('imgbot');
let winner = document.getElementById('winner');
let aud1 = document.querySelector('.aud1');
let aud2 = document.querySelector('.aud2');

// points let's  
let pointb = document.getElementById('pointb');
let pointh = document.getElementById('pointh');
let vb = 0;
let vh = 0;

// gameplay let's
let humanv = '';
let botv ='';

// bot functionilty
let botvn;

// event listners
pap.addEventListener('click' , papchange);
sci.addEventListener('click' , scichange);
sto.addEventListener('click' , stochange);

// functions
function papchange(){
	botvn = Math.floor(Math.random() * 7);
	if (botvn == 1 || botvn == 4) {
		botv = "paper";
	};
	if (botvn == 2 || botvn == 5) {
		botv = "scissor";
	};
	if (botvn == 3 || botvn == 6) {
		botv = "stone";
	};
	imghuman.innerHTML = 'paper';
	imgbot.innerHTML = botv;
	if ( imgbot.innerHTML == 'scissor') {
		vb += 1;
		pointb.value = vb; 
	};
	if ( imgbot.innerHTML == 'stone') {
		vh += 1;
		pointh.value = vh 
	};
	if (vh == 10) {
		setTimeout(function(){
			winner.innerHTML = 'You';
			aud2.innerHTML = 'are winner';
			aud1.style.tranform = "scale(1)";
			aud2.style.tranform = "scale(1)";
		},300)
		setTimeout(function(){
			location.reload();
		},2000)
	};
	if (vb == 10) {
		setTimeout(function(){
			winner.innerHTML = 'Bot';
			aud2.innerHTML = 'Is winner';
			aud1.style.tranform = "scale(1)";
			aud2.style.tranform = "scale(1)";
		},300)
		setTimeout(function(){
			location.reload();
		},2000)
	};

}
function scichange(){
	botvn = Math.floor(Math.random() * 7);
	if (botvn == 1 || botvn == 4) {
		botv = "paper";
	};
	if (botvn == 2 || botvn == 5) {
		botv = "scissor";
	};
	if (botvn == 3 || botvn == 6) {
		botv = "stone";
	};
	imghuman.innerHTML = 'scissor';
	imgbot.innerHTML = botv;
	imgbot.innerHTML = botv;
	if ( imgbot.innerHTML == 'paper') {
		vh += 1;
		pointh.value = vh; 
	};
	if ( imgbot.innerHTML == 'stone') {
		vb += 1;
		pointb.value = vb;
	};
	if (vh == 10) {
		setTimeout(function(){
			winner.innerHTML = 'You';
			aud2.innerHTML = 'are winner';
			aud1.style.tranform = "scale(1)";
			aud2.style.tranform = "scale(1)";
		},300)
		setTimeout(function(){
			location.reload();
		},2000)
	};
	if (vb == 10) {
		setTimeout(function(){
			winner.innerHTML = 'Bot';
			aud2.innerHTML = 'Is winner';
			aud1.style.tranform = "scale(1)";
			aud2.style.tranform = "scale(1)";
		},300)
		setTimeout(function(){
			location.reload();
		},2000)
	};

}
function stochange(){
	botvn = Math.floor(Math.random() * 7);
	if (botvn == 1 || botvn == 4) {
		botv = "paper";
	};
	if (botvn == 2 || botvn == 5) {
		botv = "scissor";
	};
	if (botvn == 3|| botvn == 6) {
		botv = "stone";
	};
	imghuman.innerHTML = 'stone';
	imgbot.innerHTML = botv;
	if ( imgbot.innerHTML == 'paper') {
		vb += 1;
		pointb.value = vb; 
	};
	if ( imgbot.innerHTML == 'scissor') {
		vh += 1;
		pointh.value = vh;
	};
	if (vh == 10) {
		setTimeout(function(){
			winner.innerHTML = 'You';
			aud2.innerHTML = 'are winner';
			aud1.style.tranform = "scale(1)";
			aud2.style.tranform = "scale(1)";
		},300)
		setTimeout(function(){
			location.reload();
		},2000)
	};
	if (vb == 10) {
		setTimeout(function(){
			winner.innerHTML = 'Bot';
			aud2.innerHTML = 'Is winner';
			aud1.style.tranform = "scale(1)";
			aud2.style.tranform = "scale(1)";
		},300)
		setTimeout(function(){
			location.reload();
		},2000)
	};

}
// gameplay if conditions
