export const listTodo = (data) => {
    return {
        type: "LIST_TODO",
        payload: data,
    }

}

export const addTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload: data
    }
}

export const removeTodo = (id) => {
    return {
        type: "REMOVE_TODO",
        payload: id
    }
}

export const updateTodo = (data) => {
    return {
        type: "UPDATE_TODO",
        payload: data
    }
}