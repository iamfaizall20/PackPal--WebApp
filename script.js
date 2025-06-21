const addTripBtn = document.querySelector('.addBtn');
const backButton = document.querySelectorAll('.backBtn');
const viewTripsPane = document.querySelector('.viewBtn');
const addTodoButton = document.querySelector('.addTodo');
const clearTodoButton = document.querySelector('.clearTodo');
const tripCards = document.querySelector('.tripCards');

// Screens Pane
const welcomePane = document.querySelector('.welcomePage');
const emptySlate = document.querySelector('.emptySlate');
const tripsPane = document.querySelector('.tripsPane');
const addTripPane = document.querySelector('.addTripPane');

// Array to store trip summaries as objects
const tripData = [];

// Utility: Hide all panes
function hideAllPanes() {
    welcomePane.classList.remove('show');
    addTripPane.classList.remove('show');
    tripsPane.classList.remove('show');
    emptySlate.classList.remove('show');
}
function showPaneWithAnimation(pane) {
    pane.classList.add('show');

    // Remove and re-add the animation class to force animation
    pane.classList.remove('animate');
    void pane.offsetWidth; // Trigger reflow
    pane.classList.add('animate');
}
// Show Welcome pane on load
window.addEventListener('DOMContentLoaded', () => {
    hideAllPanes();
    showPaneWithAnimation(welcomePane);
});

// Add Trip Button Click
addTripBtn.addEventListener('click', () => {
    hideAllPanes();
    showPaneWithAnimation(addTripPane);
});

// Back Button Click (go back to Welcome)
backButton.forEach(button => {
    button.addEventListener('click', () => {
        hideAllPanes();
        showPaneWithAnimation(welcomePane);
    })
});

// View Trips Click
viewTripsPane.addEventListener('click', () => {
    hideAllPanes();
    if (tripData.length === 0) {
        showPaneWithAnimation(emptySlate);
    } else {
        showPaneWithAnimation(tripsPane);
    }
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

