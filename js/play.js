// Spyfall JavaScript by Xander

let locations = ['Amusement Park', 'Bar', 'Bank', 'Beach', 'Boat', 'Casino', 'Cemetary', 'Church', 'Circus',
    'Embassy', 'Gas Station', 'Hospital', 'Hotel', 'Library', 'Market', 'Military Base', 'Mine',
    'Movie Theatre', 'Park', 'Prison', 'Police Station', 'Restaurant', 'School', 'Spa', 'Stadium',
    'University', 'Wedding', 'Zoo'];

window.onload = function () {
    let playersAmount = localStorage.getItem('players');
    let spiesAmount = localStorage.getItem('spies');
    let startPlayers = document.getElementById('start-players');
    let spyIndices = getRandomIndices(playersAmount, spiesAmount);
    let location = randomElement(locations)

    // Assign roles to players
    for (let p = 0; p < playersAmount; p++) {
        let role = spyIndices.includes(p) ? 'Spy' : location;
        startPlayers.innerHTML += `<div class="box hidden" onclick="revealRole(this)" data-player="${p + 1}"><p class="hidden">${role}</p></div>`;
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
    let pElement = box.children[0];
    let className = pElement.classList[0];
    let classList = Array.from(box.parentNode.children).map(child => child.classList[1])

    if (className === 'hidden') {
        let thisIndex = box.dataset.player - 1;
        for (let i = 0; i < thisIndex; i++) {
            if (classList[i] != 'done') return;
        }

        let role = pElement.innerHTML;
        let player = box.dataset.player;
        if (role === "Spy") {
            pElement.innerHTML = `Player ${player}: Spy`;
        } else {
            pElement.innerHTML = `Player ${player}: ${role}`;
        }

        box.classList.replace('hidden', 'revealed')
        pElement.classList.replace('hidden', 'revealed')
    } else if (className === "revealed") {
        pElement.innerHTML = "done";

        box.classList.replace('revealed', 'done')
        pElement.classList.replace('revealed', 'done')
    }
}


document.getElementById("btn3").addEventListener("click", btnClicked);

function btnClicked() {
    window.location = 'home.html';
}