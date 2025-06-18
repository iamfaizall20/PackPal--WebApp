const addTrip = document.querySelector('.addBtn')
const addModal = document.querySelector('.addTripModal');

addTrip.addEventListener('click', () => {
    addModal.classList.toggle('show')
})