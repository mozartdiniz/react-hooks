const reducer = (state, action) => {
    switch (action.type) {
        case 'saveTodos':
            return {
                todos: action.data
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
