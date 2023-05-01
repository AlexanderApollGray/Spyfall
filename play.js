// const btn3 = document.getElementById('btn3');
// const span = document.getElementById('span');

// btn3.addEventListener('click', () => {
//     window.location = 'home.html';
// });

// window.onload = function () {
// span.innerHTML = localStorage.getItem('select');
// }
// Global Variable
let locations = ['Amusement Park', 'Bank', 'Beach', 'Boat', 'Casino', 'Cemetary', 'Church', 'Circus',
    'Embassy', 'Gas Station', 'Hospital', 'Hotel', 'Library', 'Military Base', 'Mine', 'Movie Theatre',
    'Police Station', 'Restaurant', 'School', 'Spa', 'Stadium', 'University', 'Zoo'];

document.getElementById("btn3").addEventListener("click", btnClicked);

function btnClicked() {
    // Make random players spies
    let playersAmount = localStorage.getItem('players');
    let spiesAmount = localStorage.getItem('players');
    let startPlayers = document.getElementById('start-players');
    let random = '';
    let randomLocation = randomElement(locations);
    startPlayers.innerHTML = '';
    for (let n = 0; n < spiesAmount; n++) {
        random = randomInt(0, 4);
    }
    for (let p = 0; p < playersAmount; p++) {
        if (p == random) {
            startPlayers.innerHTML += `<p>Player ${p + 1}: Spy</p>`
        } else {
            startPlayers.innerHTML += `<p>Player ${p + 1}: ${randomLocation}</p>`
        }
        console.log(random);
    }
    console.log(randomLocation);
    console.log(spiesAmount);
}