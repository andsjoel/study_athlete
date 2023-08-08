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
            <div>
                <h3 class="routine-title">${title}</h3>
                <p class="routine-time">${time} hrs</p>
                <p class="routine-durat">${duration} min</p>
            </div>
            <div>
                <p class="routine-desc">${description}</p>
                
            </div>
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


document.addEventListener('DOMContentLoaded', () => {
    const exampleRoutines = [
        {
            title: 'Pitch Aplicativo',
            description: 'Apresentar o Aplicativo de Rotinas',
            time: '09:00',
            duration: '60'
        },
        {
            title: 'Treino Específico',
            description: 'Treinar valorização de rede',
            time: '14:30',
            duration: '45'
        },
        {
            title: 'Estudar Python',
            description: 'Treinar Algorítmo para desenvolver diálogos',
            time: '18:00',
            duration: '20'
        }
    ];

    exampleRoutines.forEach(routine => {
        const newItem = document.createElement('li');
        newItem.innerHTML = `
            <div class="routine-item">
                <div>
                    <h3 class="routine-title">${routine.title}</h3>
                    <p class="routine-time">${routine.time} hrs</p>
                    <p class="routine-durat">${routine.duration} min</p>
                </div>
                <div>
                    <p class="routine-desc">${routine.description}</p>
                    
                </div>
                <button class="delete-btn">X</button>
            </div>
        `;

        routineItems.appendChild(newItem);

        const deleteBtn = newItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            routineItems.removeChild(newItem);
        });
    });
});