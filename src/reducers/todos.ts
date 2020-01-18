import {addTodoActions, toggleTodoActions} from '../actions/todos';

type actions = addTodoActions | toggleTodoActions;

export type stateType = {
    list: {
        id: number,
        text: string,
        completed: boolean
    }[]
};


const initialState: stateType = {
    list: []
};

export const todoReducer = (state: stateType = initialState, action: actions) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                list: [
                    ...state.list,
                    {
                        id: state.list.length,
                        text: action.payload.text,
                        completed: false
                    }
                ]
            };
        case 'TOGGLE_TODO':
            return {
                list: state.list.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    } else {
                        return todo
                    }
                })
            };
        default:
            return state;

    }
};
