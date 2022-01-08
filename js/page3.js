let kitsTextHero = document.querySelector('.kits-text-hero-xl');
let rotatingItemCounter = 0;

// rotate(rotatingOval);
function clicked1(event) {
    console.log("clicked!")
    rotatingOval[rotatingItemCounter].setAttribute('class', 'rotating-oval')
    rotatingItemCounter++;
    if (rotatingItemCounter === 3) {rotatingItemCounter = 0};
}
kitsTextHero.addEventListener('click', clicked1);