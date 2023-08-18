
// Música
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
    if (estado != 1) {
        if (estado == 0 ) { 
            $('.sidebar').addClass('active');            
        }
        estado = 1;
        pauseAudio();
        $('#som').removeClass('fa-solid fa-volume-high fa-beat-fade');
        $('#som').addClass("fa-solid fa-volume-xmark fa-beat-fade");
        
    } else {
        estado = 2;
        playAudio();        
        $('#som').removeClass('fa-solid fa-volume-xmark fa-beat-fade');
        $('#som').addClass("fa-solid fa-volume-high fa-beat-fade");
    }    
}

