

    
export { cancelNewTodo }

    const todoDialog = document.querySelector('.add-todo-dialog');

    function closeTodoDialog() {
        todoDialog.innerHTML = '';
        todoDialog.close();
    }

    function cancelNewTodo() {
        const cancelButton = document.querySelector('.cancelBtn');
        cancelButton.addEventListener('click', () => closeTodoDialog())
    }