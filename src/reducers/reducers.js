const initalState = {
    todos: [],
};

const allReducers = (state = initalState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            const { id, data } = action.payload;
        return {
            ...state,
            todos: [
                ...state.todos,
                {
                    id: id,
                    data: data,
                },
            ],
        };
        case 'UPDATE_TODO':
            const update = state.todos.map((elem) => {
                if(elem.id === action.payload.id){
                    return {
                        ...elem,
                        data: action.payload.data,
                    };
                }
                return elem;
            });
        return {
            ...state,
            todos: update,
        };
        case 'DELETE_TODO':
            const newList = state.todos.filter((elem) => elem.id !== action.id);
        return {
            ...state,
            todos: newList,
        };
        default:
            return state;
    }
}

export default allReducers;