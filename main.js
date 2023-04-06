// Spyfall Javascript by Xander

// Control GUI Changes
// HTML Variables
let homeDiv = document.getElementById('home-div');
let setUpDiv = document.getElementById('set-up-div');
// let playDiv = document.getElementById('play-div');
let setUpLink = document.getElementById('set-up-link');
let startLink = document.getElementById('start-link');

// Play Link Clicked
setUpLink.addEventListener('click', displaySetUp);

function displaySetUp() {
    homeDiv.style.display = 'none';
    // setUpDiv.style.display = 'block';
}

// // Start Link Clicked
// startLink.addEventListener('click', displayStart);

// function displayStart() {
//     setUpDiv.style.display = 'none';
//     playDiv.style.display = 'block';
// }