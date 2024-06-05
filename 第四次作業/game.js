const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreBoard = document.getElementById('score');
let score = 0;
let lastHole;
let timeUp = false;

// 生成隨機時間
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// 隨機選擇一個洞
function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function restart() {
  
    setTimeout(() => {
        
        if (timeUp) parent.location.reload();
    }, 3000);
}




// 地鼠出現
function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    const mole = hole.querySelector('.mole');
    mole.style.display = 'block';
    setTimeout(() => {
        mole.style.display = 'none';
        if (!timeUp) peep();
		if (timeUp) restart();
    }, time);
}

// 開始遊戲
function startGame() {
    scoreBoard.textContent = 'Score: 0';
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000);
}

// 點擊地鼠
function bonk(e) {
    if (!e.isTrusted) return; // 確保是用戶點擊
    score++;
    this.style.display = 'none';
    scoreBoard.textContent = `Score: ${score}`;
}

moles.forEach(mole => mole.addEventListener('click', bonk));


function start(){
	
 startGame();
  var timer = document.querySelector("#timer");
  var number = 10;
  setInterval(function(){
    number -- ;
    if(number <= 0 )
      number = 0;
    timer.innerText = number + 0 }, 1000);
}

