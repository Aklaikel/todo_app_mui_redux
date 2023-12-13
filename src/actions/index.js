export const addTodo = (todo) => {
    return {
        type: "ADD_TODO",
        payload: {
            id : new Date().getTime().toString(),
            data: todo,
        }
    };
}

export const updateTodo = (id, todo) => {
    return {
        type: "UPDATE_TODO",
        payload: {
            id,
            data: todo,
        }
    };
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id,
    };
}