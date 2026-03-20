const container = document.querySelector("#container");
const header = document.querySelector("#header")
let divE = document.createElement("div")
let gameRunning = false
let score = 0


function starting(){
    divE.className='start'

    divE.innerHTML='<h2>HIT!</h2>'

    container.appendChild(divE)

    divE.onclick = () => {
        divE.className='box'
        playing()
    }
}

function boxChanging(){
    if(!gameRunning) return;
    
    const headerHeight = header.offsetHeight;

    const maxX = window.innerWidth - divE.offsetWidth;
    const maxY = window.innerHeight - divE.offsetHeight - headerHeight;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY + headerHeight;
    
    divE.style.left = randomX + "px";
    divE.style.top = randomY + "px";
    score += 1
    console.log(score)
}

function playing(){
    score = 0
    gameRunning = true
    
    divE.innerHTML=''
    divE.className='box'

    divE.onclick = boxChanging;
    setTimeout(() => {
        gameRunning = false

        divE.onclick=null
        divE.className='end'

        divE.innerHTML=`
            <h3>Your Score</h3>
            <h1>${score}</h1>
            <h2 class='home'>HOME</h2>
            <h2 class='retry'>RETRY</h2>
        `
        const homeBtn = document.querySelector(".home")
        const retryBtn = document.querySelector(".retry")

        homeBtn.onclick = (e) => {
            e.stopPropagation();  // 🔥 fix
            starting();
        };

        retryBtn.onclick = (e) => {
            e.stopPropagation();  // 🔥 fix
            playing();
        };
    }, 10000);
}


starting()