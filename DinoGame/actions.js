
const dino = document.querySelector('#dino');
const back = document.querySelector('.cenario')
var jum = false
	let pos = 0;


function jump(event){

	if(event.keyCode === 32){
		if(!jum){
			jum = true
		const up = setInterval(() => {
			if(pos >=15){
				clearInterval(up);
				const down = setInterval(
					() =>{
						if(pos == 0){
							clearInterval(down)
							jum = false;
						}else{
						pos -= 1;
						dino.style.marginBottom = pos+"vh"
					}}
					,20)
			}else{
				pos += 1;
				dino.style.marginBottom = pos+"vh"}}
				,
				20)
	}
	}
}


function createCactus(){
	const cactus = document.createElement('div');
	let cactusPosition = 1000;
	let rand = Math.random() * 6000;
	cactus.classList = "cactus"
	cactus.style.left = "1000px"
	back.appendChild(cactus);

	const movCactus = setInterval(() =>{
		if(cactusPosition <= -50){
			clearInterval(movCactus)
			back.removeChild(cactus)
		}
		else if(cactusPosition <= 40 && cactusPosition > 0 && pos < 8){
			clearInterval(movCactus)
			clearInterval(repete)
			document.querySelector('body').innerHTML = "<h1>Game Over</h1>"
		}
		else{
		cactusPosition -= 13;
		cactus.style.left = cactusPosition + "px"
	}
}
		,20)
	var repete = setTimeout(createCactus,rand);
	}




createCactus();
document.addEventListener('keypress',jump);