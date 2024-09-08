document.getElementById('btnnuevaTarea').addEventListener('click', function() {
    const taskInput = document.getElementById('nuevaTarea');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('listaTareas');
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Botón para marcar como completada
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Completar';
        completeBtn.addEventListener('click', function() {
            if (taskItem.innerHTML.includes('<s>')) {
                taskItem.innerHTML = taskText; // Quitar tachado
            } else {
                taskItem.innerHTML = `<s>${taskText}</s>`;
            }
        });

        // Botón para eliminar
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(completeBtn);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    } else {
        alert('Por favor, ingresa una tarea.');
    }
});