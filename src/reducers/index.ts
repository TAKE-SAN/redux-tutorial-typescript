import {combineReducers} from 'redux';
import * as todos from './todos';
import * as visibilityFilters from './visibilityFilters';

export type rootStateType = {
    todos: todos.stateType;
    visibilityFilter: visibilityFilters.stateType;
};

export const rootReducer = combineReducers({
    todos: todos.todoReducer,
    visibilityFilter: visibilityFilters.visibilityFilterReducer
});
