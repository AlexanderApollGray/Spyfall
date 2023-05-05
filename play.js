// Spyfall JavaScript by Xander
const span = document.getElementById('span');

let locations = ['Amusement Park', 'Bank', 'Beach', 'Boat', 'Casino', 'Cemetary', 'Church', 'Circus',
    'Embassy', 'Gas Station', 'Hospital', 'Hotel', 'Library', 'Market', 'Military Base', 'Mine',
    'Movie Theatre', 'Park', 'Prison', 'Police Station', 'Restaurant', 'School', 'Spa', 'Stadium',
    'University', 'Wedding', 'Zoo'];


window.onload = function () {
    // Make random players spies
    let playersAmount = localStorage.getItem('players');
    let spiesAmount = localStorage.getItem('spies');
    let startPlayers = span;
    let random = '';
    let randomLocation = randomElement(locations);
    startPlayers.innerHTML = '';
    for (let n = 0; n < spiesAmount; n++) {
        random = randomInt(0, playersAmount);
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

document.getElementById("btn3").addEventListener("click", btnClicked);

function btnClicked() {
    window.location = 'home.html';
}