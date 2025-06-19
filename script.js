const addTripBtn = document.querySelector('.addBtn');
const emptySlate = document.querySelector('.emptySlate');
const addTripPane = document.querySelector('.addTripPane');
const viewTripsPane = document.querySelector('.viewBtn');
const backButton = document.querySelector('.backBtn');
const tripsPane = document.querySelector('.tripsPane');
const addTodoButton = document.querySelector('.addTodo');
const clearTodoButton = document.querySelector('.clearTodo');

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

addTodoButton.addEventListener('click', () => {
    const tripTodo = document.getElementById('tripTodo');
    const taskList = document.querySelector('.tasks');

    if (tripTodo.value === "") {
        alert("fill fields")
        return;
    }

    const Todo = document.createElement('li')
    Todo.className = 'task-text';
    Todo.textContent = tripTodo.value;

    taskList.prepend(Todo);
    tripTodo.value = "";
})
clearTodoButton.addEventListener('click', () => {
    const taskList = document.querySelector('.tasks');

    taskList.innerHTML = ''

})
