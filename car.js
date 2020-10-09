
const score = document.querySelector('.score');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');

// player to click to start the game
//calls the start function
startScreen.addEventListener('click', startGame);

//keys
const keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false }
let player = { speed: 5 };

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

//key down
function keyDown(e) {
    e.preventDefault();
    keys[e.key] = true;
}

//key up to change keydown to false
function keyUp(e) {
    e.preventDefault();
    keys[e.key] = false;
}

function gamePlay() {
    if (player.start) {
        window.requestAnimationFrame(gamePlay);
    }

    let car = document.querySelector('.car')
    let road = gameArea.getBoundingClientRect();

    if (keys.ArrowUp) {
        player.y -= player.speed;
    }
    if (keys.ArrowDown  ) {
        player.y += player.speed;
    }
    if (keys.ArrowRight && player.x < (road.width-50)) {
        player.x += player.speed;
    }
    if (keys.ArrowLeft && player.x > 0) {
      player.x -= player.speed;
    }

    car.style.top = player.y + 'px';
    car.style.left = player.x + 'px';
    
}

function startGame() {
  gameArea.classList.remove("hide");
  startScreen.classList.add("hide");

  player.start = true;
  //calls the gamePlay
  window.requestAnimationFrame(gamePlay);


  let car = document.createElement("div");
  car.setAttribute("class", "car");
  car.innerText = "Car";
  // add a car div inside startscreen
  gameArea.appendChild(car);

  player.x = car.offsetLeft;
  player.y = car.offsetTop;
} 