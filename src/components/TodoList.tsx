import * as React from 'react';
import Todo from './Todo';

type propsType = {
    todos: {
        id: number,
        text: string,
        completed: boolean
    }[],
    toggleTodo: (id: number) => void
};

const todoList: React.FC<propsType> = (props) => {
    return (
        <ul>
            {props.todos.map(todo => {
                return (
                    <Todo
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onClick={() => { props.toggleTodo(todo.id); }}
                    />
                )
            })}
        </ul>
    )
};

export default todoList;
