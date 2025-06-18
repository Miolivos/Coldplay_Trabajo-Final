
const playPauseButton = document.getElementById('playPauseButton');
const mySong = document.getElementById('mySong');
const buttonText = document.getElementById('buttonText'); 

if (playPauseButton && mySong && buttonText) { 
    playPauseButton.addEventListener('click', () => {
        
        if (mySong.paused) {
            mySong.play()
            buttonText.textContent = '❚❚ PAUSE';
        } else {
            mySong.pause(); 
            buttonText.textContent = '► PLAY';   
        }
    });


    mySong.addEventListener('ended', () => {
        buttonText.textContent = '► PLAY';
    });


    mySong.addEventListener('play', () => {
        buttonText.textContent = '❚❚ PAUSE';
    });

  
    mySong.addEventListener('pause', () => {
        if (mySong.currentTime > 0 && !mySong.ended) { 
            buttonText.textContent = '► PLAY';
        }
    });

} else {
    console.error('Error: No se pudieron encontrar todos los elementos HTML necesarios (botón, audio o texto).');
}