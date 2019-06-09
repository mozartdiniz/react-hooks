export const updateTodo = (todos, data) =>
    todos.map(todo => todo.id !== data.id ? todo : data);

const reducer = (state, action) => {
    switch (action.type) {
        case 'saveTodos':
            return {
                todos: action.data
            }
        case 'updateTodo':
            return {
                todos: updateTodo(state.todos, action.data)
            }
        case 'cleanTodos':
            return {
                todos: []
            }
        default:
            return state;
    }
}

export default reducer;
