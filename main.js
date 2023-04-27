// Spyfall Javascript by Xander

// Global Variable
let locations = ['Amusement Park', 'Bank', 'Beach', 'Boat', 'Casino', 'Cemetary', 'Church', 'Circus',
    'Embassy', 'Gas Station', 'Hospital', 'Hotel', 'Library', 'Military Base', 'Mine', 'Movie Theatre',
    'Police Station', 'Restaurant', 'School', 'Spa', 'Stadium', 'University', 'Zoo'];

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
    // Make random players spies
    let playersAmount = document.getElementById('players').value;
    let spiesAmount = document.getElementById('spies').value;
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

const btn2 = document.getElementById('btn2');
const select = document.getElementById('players');
const select2 = document.getElementById('spies');

btn2.addEventListener('click', () => {
    localStorage.setItem('select', select.value);
    window.location = "play.html"
});