import {connect} from 'react-redux';
import {Action, Dispatch} from 'redux';
import TodoList from '../components/TodoList';

import {toggleTodo} from '../actions/todos';
import {rootStateType} from '../reducers';

const mapStateToProps = (state: rootStateType) => {
    const filter = () => {
        switch (state.visibilityFilter.filter.type) {
            case 'SHOW_ALL':
                return state.todos.list;
            case 'SHOW_COMPLETED':
                return state.todos.list.filter(e => e.completed);
            case 'SHOW_ACTIVE':
                return state.todos.list.filter(e => !e.completed);
            default:
                throw new Error('Unknown filter.');
        }
    };

    return {
        todos: filter()
    }
};

const mapDipatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        toggleTodo: (id: number) => {
            dispatch(toggleTodo({id: id}))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(TodoList);
