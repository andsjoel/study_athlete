const newRoutineBtn = document.getElementById('new-routine-btn');
const newRoutineModal = document.getElementById('new-routine-modal');
const closeModalBtn = document.getElementById('close-modal');
const newRoutineForm = document.getElementById('new-routine-form');
const routineItems = document.getElementById('routine-items');

newRoutineBtn.addEventListener('click', () => {
    newRoutineModal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    newRoutineModal.style.display = 'none';
});

newRoutineForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const time = document.getElementById('time').value;
    const duration = document.getElementById('duration').value;

    const newItem = document.createElement('li');
    newItem.innerHTML = `
        <div class="routine-item">
            <h3>${title}</h3>
            <p>${description}</p>
            <p>Horário: ${time}</p>
            <p>Duração: ${duration}</p>
            <button class="delete-btn">X</button>
        </div>
    `;

    routineItems.appendChild(newItem);

    const deleteBtn = newItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        routineItems.removeChild(newItem);
    });

    newRoutineModal.style.display = 'none';
    newRoutineForm.reset();
});
