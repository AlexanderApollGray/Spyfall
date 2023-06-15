const btn2 = document.getElementById('btn2');
const select = document.getElementById('players');
const select2 = document.getElementById('spies');

btn2.addEventListener('click', () => {
    localStorage.setItem('players', select.value);
    localStorage.setItem('spies', select2.value);
    window.location = "play.html"
});