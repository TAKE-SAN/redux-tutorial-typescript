import * as React from 'react';

type propsType = {
    text: string,
    completed: boolean,
    onClick: () => void
}

const todo: React.FC<propsType> = (props) => {
    return (
        <li
            onClick={props.onClick}
            style={{
                textDecoration: props.completed ? 'line-through' : 'none'
            }}
        >
            {props.text}
        </li>
    )
};

export default todo;
