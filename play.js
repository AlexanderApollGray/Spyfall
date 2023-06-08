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
        startPlayers.innerHTML += `<div class="box" onclick="revealRole(this)">
                                     <p class="hidden">${role}</p>
                                     </div>`;
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

// Function to reveal the role when a box is clicked
function revealRole(box) {
    box.classList.toggle('revealed');
    let hiddenText = box.querySelector('.hidden');
    if (hiddenText.innerHTML === "done") {
        hiddenText.innerHTML = `Player ${p + 1}: Location`;
    } else {
        hiddenText.innerHTML = "done";
    }
}

document.getElementById("btn3").addEventListener("click", btnClicked);

function btnClicked() {
    window.location = 'home.html';
}