const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    window.location = 'setup.html';
});

let rulesEl = document.getElementById("rules");
let rulesTextEl = document.getElementById("rules-text");
let locationsEl = document.getElementById("locations");
let locationsTextEl = document.getElementById("locations-text");

// Event Listener
rulesEl.addEventListener("click", revealRules);

function revealRules() {
    rulesTextEl.hidden = !rulesTextEl.hidden;
}

// Event Listener
locationsEl.addEventListener("click", revealLocations);

function revealLocations() {
    locationsTextEl.hidden = !locationsTextEl.hidden;
}