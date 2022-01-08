let rotatingOval = document.querySelectorAll('.rotating-oval');
let kitsTextHero = document.querySelector('.kits-text-hero');
console.log(rotatingOval);
let rotatingItemCounter = 0;
// function rotate (object) {
//     object.setAttribute('class', 'rotate')
// }

// rotate(rotatingOval);
function clicked1(event) {
    console.log("clicked!")
    rotatingOval[rotatingItemCounter].setAttribute('class', 'rotating-oval')
    rotatingItemCounter++;
    if (rotatingItemCounter === 3) {rotatingItemCounter = 0};
}
kitsTextHero.addEventListener('click', clicked1);
