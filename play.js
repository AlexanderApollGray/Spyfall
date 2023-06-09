// Spyfall JavaScript by Xander
const span = document.getElementById('span');

let locations = ['Amusement Park', 'Bank', 'Beach', 'Boat', 'Casino', 'Cemetary', 'Church', 'Circus',
    'Embassy', 'Gas Station', 'Hospital', 'Hotel', 'Library', 'Market', 'Military Base', 'Mine',
    'Movie Theatre', 'Park', 'Prison', 'Police Station', 'Restaurant', 'School', 'Spa', 'Stadium',
    'University', 'Wedding', 'Zoo'];

window.onload = function () {
    let playersAmount = localStorage.getItem('players');
    let spiesAmount = localStorage.getItem('spies');
    let startPlayers = span;
    let spyIndices = getRandomIndices(playersAmount, spiesAmount);
    let location = randomElement(locations)
    startPlayers.innerHTML = '';

    // Assign roles to players
    for (let p = 0; p < playersAmount; p++) {
        let role = spyIndices.includes(p) ? 'Spy' : location;
        startPlayers.innerHTML += `<div class="box" onclick="revealRole(this)" data-revealed="false" 
        data-player="${p + 1}"><p class="hidden">${role}</p></div>`;
    }
}

// Function to generate an array of random indices
function getRandomIndices(totalCount, count) {
    let indices = [];
    while (indices.length < count) {
        let randomIndex = Math.floor(Math.random() * totalCount);
        if (!indices.includes(randomIndex)) {
            indices.push(randomIndex);
        }
    }
    return indices;
}

function revealRole(box) {
    let revealed = box.dataset.revealed;
    if (revealed === "false") {
        box.classList.add('revealed');
        let hiddenText = box.querySelector('.hidden');
        let role = hiddenText.innerHTML;
        let player = box.dataset.player;
        if (role === "Spy") {
            hiddenText.innerHTML = `Player ${player}: Spy`;
        } else {
            hiddenText.innerHTML = `Player ${player}: ${role}`;
        }
        box.dataset.revealed = "true";
    } else if (revealed === "true") {
        box.classList.remove('revealed');
        let hiddenText = box.querySelector('.hidden');
        hiddenText.innerHTML = "done";
        box.dataset.revealed = "done";
    }
}


document.getElementById("btn3").addEventListener("click", btnClicked);

function btnClicked() {
    window.location = 'home.html';
}