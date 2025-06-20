const addTripBtn = document.querySelector('.addBtn');
const emptySlate = document.querySelector('.emptySlate');
const addTripPane = document.querySelector('.addTripPane');
const viewTripsPane = document.querySelector('.viewBtn');
const backButton = document.querySelector('.backBtn');
const tripsPane = document.querySelector('.tripsPane');
const addTodoButton = document.querySelector('.addTodo');
const clearTodoButton = document.querySelector('.clearTodo');
const tripData = [];

window.addEventListener('load', () => {
    if (tripData.length == 0) {
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
    emptySlate.classList.add('hide');
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
})
clearTodoButton.addEventListener('click', () => {
    const taskList = document.querySelector('.tasks');

    taskList.innerHTML = ''

})

