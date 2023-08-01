const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const elemento = document.querySelector('#contador')
let contador = 0;

const jump = () => {
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)

}

var loop = setInterval(() => {
    const x = 0;
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    elemento.innerHTML = `<p>${contador++}</p>`;

        if (pipePosition <= 110 && pipePosition > 0 && marioPosition < 100) {

            pipe.style.animation = 'none';
            pipe.style.left = '110px';
            
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
            
            mario.src = './img/game-over.png';
            mario.style.width ='75px';
            mario.style.marginLeft ='50px';

            clearInterval(loop)

    }

}, 10);

document.addEventListener('keydown', jump)