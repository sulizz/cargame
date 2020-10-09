
const score = document.querySelector('.score');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');
console.log(gameArea);

startScreen.addEventListener('click', start);

//keys
const keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false }
let player = { speed: 5 };

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

function keyDown(e) {
    e.preventDefault();
    keys[e.jey] = true;
}
function keyUp(e) {
    e.preventDefault();
    keys[e.jey] = false;

}

function gamePlay() {
    if (player.start) {
        window.requestAnimationFrame(gamePlay);
    }

    let car = document.querySelector('.car')

    if (keys.ArrowUp) {
        player.y += 5;
    }
    if (keys.ArrowDown) {
        player.y -= player.speed;
    }
    if (keys.ArrowRight) {
        player.x += player.speed;
    }
    if (keys.ArrowLeft) {
        player.y -= player.speed;
    }

    car.style.top = player.y + 'px';
    car.style.left = player.x + 'px';
    
}

function start() {

    gameArea.classList.remove('hide');
    startScreen.classList.add('hide');

    player.start = true;
    window.requestAnimationFrame(gamePlay);

    //adding a div using js
    let car = document.createElement('div');
    car.setAttribute('class', 'car');
    car.innerText = 'Car';
    gameArea.appendChild(car);

    player.x =  car.offsetLeft;
    player.y = car.offsetTop;
} 