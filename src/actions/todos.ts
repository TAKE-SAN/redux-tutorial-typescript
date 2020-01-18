import {Action} from 'redux';

export type addTodoPayload = {
    text: string
}

export interface addTodoActions extends Action {
    type: 'ADD_TODO',
    payload: addTodoPayload
}

export const addTodo = (payload: addTodoPayload): addTodoActions => {
    return {
        type: "ADD_TODO",
        payload
    }
};

export type toggleTodoPayload = {
    id: number
}

export interface toggleTodoActions extends Action {
    type: 'TOGGLE_TODO',
    payload: toggleTodoPayload
}

export const toggleTodo = (payload: toggleTodoPayload): toggleTodoActions => {
    return {
        type: "TOGGLE_TODO",
        payload
    }
};
