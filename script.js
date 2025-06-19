const addTripBtn = document.querySelector('.addBtn');
const emptySlate = document.querySelector('.emptySlate');
const addTripPane = document.querySelector('.addTripPane');
const viewTripsPane = document.querySelector('.viewBtn');
const backButton = document.querySelector('.backBtn');
const tripsPane = document.querySelector('.tripsPane');

addTripBtn.addEventListener('click', () => {
    emptySlate.classList.add('hide');
    tripsPane.classList.remove('show');
    addTripPane.classList.add('show');
});

backButton.addEventListener('click', () => {
    addTripPane.classList.remove('show');
    tripsPane.classList.add('show');
});

viewTripsPane.addEventListener('click', () => {
    emptySlate.classList.add('hide');
    addTripPane.classList.remove('show');
    tripsPane.classList.add('show');
});
