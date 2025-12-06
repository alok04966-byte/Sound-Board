const soundMap = {
    'dog': 'sounds/dog.mp3',
    'horn': 'sounds/horn.mp3',
    'cat': 'sounds/cat.mp3',
    'duck': 'sounds/duck.mp3'
};

const soundButtons = document.querySelectorAll('.sound-button');
const volumeSlider = document.getElementById('volume-slider');

let currentVolume = parseFloat(volumeSlider.value);

volumeSlider.addEventListener('input', () => {
    currentVolume = parseFloat(volumeSlider.value);
    console.log('Volume set to:', currentVolume);
});

soundButtons.forEach(button => {
    button.addEventListener('click', () => {
        const soundKey = button.getAttribute('data-sound');
        
        const filePath = soundMap[soundKey];
        const audio = new Audio(filePath);

        audio.volume = currentVolume;

        audio.play().catch(error => {
            console.error('Error playing sound:', error);
        });
    });
});