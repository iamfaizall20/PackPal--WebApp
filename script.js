const addTripBtn = document.querySelector('.addBtn');
const emptySlate = document.querySelector('.emptySlate');
const addTripPane = document.querySelector('.addTripPane');
const viewTripsPane = document.querySelector('.viewBtn');
const backButton = document.querySelector('.backBtn');
const tripsPane = document.querySelector('.tripsPane');
const addTodoButton = document.querySelector('.addTodo');
const clearTodoButton = document.querySelector('.clearTodo');
const tripCards = document.querySelector('.tripCards');

const tripData = [];

window.addEventListener('load', () => {
    if (tripData.length === 0) {
        emptySlate.classList.remove('hide')
    }
})
// Functions For Tabs 
addTripBtn.addEventListener('click', () => {
    addTripPane.classList.add('show');
    emptySlate.classList.add('hide');
    tripsPane.classList.remove('show');
});

backButton.addEventListener('click', () => {
    addTripPane.classList.remove('show');
    tripsPane.classList.add('show');
});

viewTripsPane.addEventListener('click', () => {
    if (tripData.length == 0) {
        emptySlate.classList.add('hide')
    }

    emptySlate.classList.remove('hide');
    addTripPane.classList.remove('show');
    tripsPane.classList.add('show');
});

// Add Trip Button => Adds Data is Card,Array and TasksList
addTodoButton.addEventListener('click', () => {
    const tripTitle = document.getElementById('tripTitle'); //Trip Title Field
    const tripTodo = document.getElementById('tripTodo'); //Trip Tasks Field
    const taskList = document.querySelector('.tasks'); //Checklist

    if (tripTodo.value === "") {
        alert("fill fields")
        return;
    }

    const Todo = document.createElement('li')
    Todo.className = 'task-text';
    Todo.textContent = tripTodo.value;

    taskList.prepend(Todo);
    tripTodo.value = "";

    // Store data in Array as Objects
    let existingTrip = tripData.find(function (trip) {
        return trip.Title === tripTitle.value;
    })

    if (existingTrip) {
        existingTrip.checkLists.push(Todo.textContent)
    } else {
        const newTrip = {
            Title: tripTitle.value,
            checkLists: [Todo.textContent]
        }
        tripData.push(newTrip);
    }

    // Creating and Storing Trip data in Cards
    const Card = document.createElement('div')
    Card.className = 'card'

    const cardTitle = document.createElement('h3')
    cardTitle.className = 'cardTitle'
    cardTitle.textContent = tripTitle.value;

    //Generating Today's Day and Date
    const today = new Date();

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const formattedDate = today.toLocaleDateString('en-US', options);

    const dayDate = document.createElement('p');
    dayDate.className = 'Day-Date';
    dayDate.textContent = formattedDate;

    const viewPlans = document.createElement('p');
    viewPlans.className = 'viewPlans';
    viewPlans.textContent = "Click to view your Plans";

    Card.appendChild(cardTitle)
    Card.appendChild(dayDate)
    Card.appendChild(viewPlans)

    tripCards.appendChild(Card);
})
clearTodoButton.addEventListener('click', () => {
    const taskList = document.querySelector('.tasks');

    taskList.innerHTML = ''

})

