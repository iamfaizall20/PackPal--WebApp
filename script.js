const addTripBtn = document.querySelector('.addBtn');
const emptySlate = document.querySelector('.emptySlate');
const addTripPane = document.querySelector('.addTripPane');

addTripBtn.addEventListener('click', () => {
    emptySlate.classList.add('hide');
    addTripPane.classList.add('show');
})