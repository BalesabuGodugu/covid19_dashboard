const HEARTS_COUNT = 20;
const {body} = document;
const COLORS = ['yellow','pink','blue','purple','green','red','orange','brown'];

for (let index = 0; index < HEARTS_COUNT; index++) {
   
    const heartsel = document.createElement('div');

    heartsel.classList.add('heart');
    console.log(heartsel);
    heartsel.style.left= Math.random() * 100 +"%";
    heartsel.style.animationDelay= Math.random() * 2 +"s";
    heartsel.style.backgroundColor = randomColor();
    body.appendChild(heartsel);
    
}
function randomColor(){
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}