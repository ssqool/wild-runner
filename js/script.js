let game = document.querySelector('#game');
let dino = document.querySelector('#dino');
let cactus = document.querySelector('#cactus');
let restartButton = document.querySelector('.restart');
let scoreHtml = document.querySelector('.score');
let currentScore = document.querySelector('.current_score');
let scoreBest = document.querySelector('.best');
let scoreCounter = 0;

if (!localStorage.best) {
    localStorage.best = 0;
} else if (localStorage.best) {

}

let jumpOnclick = () => {
    if (!dino.classList.contains('dinoJump')) {
        dino.classList.add('dinoJump')
    } else {
        return;
    }
    setTimeout( () => {
        dino.classList.remove('dinoJump');
    }, 1000)
}
document.addEventListener('click', jumpOnclick)

let maxDinoHeight = parseInt(getComputedStyle(dino).getPropertyValue('top')) - 60;
console.log(maxDinoHeight);

let collision = setInterval( () => {
    let dinoTop = parseInt(getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(getComputedStyle(cactus).getPropertyValue('left'));

    scoreBest.innerHTML = `Best: ${localStorage.best}`;

    if (cactusLeft < 100 && cactusLeft > 0 && dinoTop >= maxDinoHeight) {
        const resetButton = document.querySelector('.reset');
        scoreCounter >= localStorage.best ? localStorage.best = scoreCounter : localStorage.best;
        scoreHtml.innerHTML = `Score: ${scoreCounter}`;
        restartButton.style.display = 'flex';
        game.style.opacity = '0.1'
        clearInterval(addingScore);
        removeEventListener('click', jumpOnclick);
        resetButton.addEventListener('click', ()=>{location.href = 'play.html'});
        return
    }
}, 3)

let addingScore = setInterval( () => {
    ++scoreCounter
    currentScore.innerHTML = `Score: ${scoreCounter}`
}, 2000)