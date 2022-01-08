let rotatingOval = document.querySelector('.rotating-oval');
let kitsTextHero = document.querySelector('.kits-text-hero');
console.log(rotatingOval);
function rotate (object) {
    object.setAttribute('class', 'rotate')
}

// rotate(rotatingOval);
function clicked1(event) {
    console.log("clicked!")
    rotatingOval.setAttribute('class', 'rotating-oval')
}
kitsTextHero.addEventListener('click', clicked1);