// Slider testimonial

let slider = document.querySelector('.slides');
let slide = document.querySelectorAll('.slides .slide');
let btnLeft = document.querySelector('.btn-left');
let btnRight = document.querySelector('.btn-right');
let tamañoSlide = slide[0].clientWidth;
let contador = 0;

// Actualizar tamaño
window.addEventListener('resize', () => {
	tamañoWidth = slide[0].clientWidth;
});

// Slider automatico

function slides(){
	if(contador == slide.length - 1){
		contador = 0;
		slider.style.transform = 'translate(0px)';
	}else{
		contador++;
	}

	slider.style.transform = 'translate(' + (- tamañoSlide * contador) + 'px)';
}

let sliderTime = setInterval(()=>{slides()}, 3000);

// Slider manual

btnLeft.addEventListener('click', ()=>{
	if(contador <= 0){
		contador = slide.length - 1;

		slider.style.transform = 'translate(' + (- tamañoSlide * contador) + 'px)';
	}else{
		contador--;

		slider.style.transform = 'translate(' + (- tamañoSlide * contador) + 'px)';
	}

	window.clearInterval(sliderTime);

	sliderTime = setInterval(()=>{slides()}, 3000);
});

btnRight.addEventListener('click', ()=>{
	if(contador == slide.length - 1){
		contador = 0;
		slider.style.transform = 'translate(0px)';
	}else{
		contador++;
	}

	slider.style.transform = 'translate(' + (- tamañoSlide * contador) + 'px)';

	window.clearInterval(sliderTime);

	sliderTime = setInterval(()=>{slides()}, 3000);
});

// Barras

let contentBars = document.querySelector('.bars');
let bars = [];

for(i=0; i < slide.length; i++){
	let bar = document.createElement('div');
	bar.className = 'bar';
	bar.setAttribute('data-id', i);
	bars.push(bar);

	contentBars.appendChild(bars[i]);
}

bars.forEach((bar)=>{
	bar.addEventListener('click', ()=>{
		let id = bar.getAttribute('data-id');

		slider.style.transform = 'translate(' + (- tamañoSlide * id) + 'px)';

		window.clearInterval(sliderTime);

		sliderTime = setInterval(()=>{slides()}, 3000);

		contador = id;
	});	
});