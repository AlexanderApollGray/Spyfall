const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    window.location = 'setup.html';
});

let rulesEl = document.getElementById("rules");
let rulesTextEl = document.getElementById("rules-text");
let locationsEl = document.getElementById("locations");
let locationsTextEl = document.getElementById("locations-text");

rulesTextEl.style.display = "none";
// Event Listener
rulesEl.addEventListener("click", revealRules);

function revealRules() {
    if (rulesTextEl.style.display === "none") {
        rulesTextEl.style.display === "block";
    } else {
        rulesTextEl.style.display === "none";
    }
}

locationsTextEl.style.display = "none";
// Event Listener
locationsEl.addEventListener("click", reveallocations);

function reveallocations() {
    if (locationsTextEl.style.display === "none") {
        locationsTextEl.style.display === "block";
    } else {
        locationsTextEl.style.display === "none";
    }
}