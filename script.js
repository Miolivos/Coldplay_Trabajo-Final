
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

const customCursor = document.querySelector('.custom-cursor');

// 1. Mover el puntero personalizado
document.addEventListener('mousemove', (e) => {
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
});

// 2. Interactuar con elementos específicos (ej. imágenes)
const interactiveElements = document.querySelectorAll('.interactive-image');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('hovering');
    });

    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('hovering');
    });
});

// Opcional: Interactuar con enlaces/texto si lo deseas
document.querySelectorAll('a, p').forEach(element => {
    element.addEventListener('mouseenter', () => {
        customCursor.classList.add('hovering');
    });
    element.addEventListener('mouseleave', () => {
        customCursor.classList.remove('hovering');
    });
});

// Opcional: Ocultar el puntero si sale de la ventana (para evitar que se quede fijo)
document.addEventListener('mouseleave', () => {
    customCursor.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    customCursor.style.opacity = '1';
});