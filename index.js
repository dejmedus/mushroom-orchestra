const mushrooms = document.getElementById('mushrooms');

const redMushroom = document.getElementById('red');
const orangeMushroom = document.getElementById('orange');
const blueMushroom = document.getElementById('blue');
const greenMushroom = document.getElementById('green');
const purpleMushroom = document.getElementById('purple');

const Mush = (element, color) => {
    element.classList.add('wobble-hor-bottom');
    setTimeout(() => {
        element.classList.remove('wobble-hor-bottom');
    }, 1000)
    new Audio(`./assets/audio/${color}.mp3`).play();
}

// mouse clicks
mushrooms.addEventListener('click', (e) => {
    if (e.target.id !== 'mushrooms') {
        Mush(e.target, e.target.id);
    }
})

// number keys
document.addEventListener("keydown", (e) => {
    if (e.key === '1') {
        Mush(redMushroom, 'red');
    }
    else if (e.key === '2') {
        Mush(orangeMushroom, 'orange');
    }
    else if (e.key === '3') {
        Mush(blueMushroom, 'blue');
    }
    else if (e.key === '4') {
        Mush(purpleMushroom, 'purple');
    }
    else if (e.key === '5') {
        Mush(greenMushroom, 'green');
    }
});
