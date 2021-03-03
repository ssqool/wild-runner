let game = document.querySelector('#game')
let dino = document.querySelector('#dino');
let cactus = document.querySelector('#cactus')
let restartButton = document.querySelector('.restart')
let scoreHtml = document.querySelector('.score');
let scoreCounter = 0;

document.addEventListener('click', () => {
    if (!dino.classList.contains('dinoJump')) {
        dino.classList.add('dinoJump')
    } else {
        return;
    }
    setTimeout( () => {
        dino.classList.remove('dinoJump');
    }, 1000)
})

let maxDinoHeight = parseInt(getComputedStyle(dino).getPropertyValue('top')) - 80;
console.log(maxDinoHeight)

let collision = setInterval( () => {
    let dinoTop = parseInt(getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft < 120 && cactusLeft > 20 && dinoTop >= maxDinoHeight) {
        const resetButton = document.querySelector('.reset');
        scoreHtml.innerHTML = `Score: ${scoreCounter}`;
        restartButton.style.display = 'flex';
        game.style.opacity = '0.2'
        clearInterval(addingScore);
        resetButton.addEventListener('click', ()=>{location.href = 'play.html'})
    }
}, 3)

let addingScore = setInterval( () => ++scoreCounter, 2000)