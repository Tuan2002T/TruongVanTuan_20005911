const initState = {

    todoList: [
        
    ]
}

const rootReducer  = (state = initState, action) => {
    switch (action.type) {
        case "LIST_TODO":
            return {
                ...state,
                todoList: action.payload
            }
        case "ADD_TODO":
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
        case "REMOVE_TODO":
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== action.payload.id)
            }
        case "UPDATE_TODO":
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if (todo.id === action.payload.data.id) {
                        return {...todo, job: action.payload.data.job};
                    }
                    return todo;

                })
            }
        default:
            return state;
    }   
}

export default rootReducer;