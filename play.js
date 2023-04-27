// const btn = document.getElementById('btn');
const span = document.getElementById('span');

// btn.addEventListener('click', () => {
//     window.location = 'index1.html';
// });

window.onload = function () {
    span.innerHTML = localStorage.getItem('input');
}