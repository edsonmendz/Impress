

function playAudio () {    
    let x = document.getElementById("myAudio");
    x.play();
}

function pauseAudio () {    
    let x = document.getElementById("myAudio");
    x.pause();
}

estado = 0;

function executar () {
    
    if (estado < 1) {
        estado = 1;
        playAudio();
        console.log(estado)
    } else {
        estado = 0;
        pauseAudio();
        console.log(estado);
    }    
}
