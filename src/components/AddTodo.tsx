import * as React from 'react';

type propsType = {
    onSubmit: (text: string) => void
};

const addTodo: React.FC<propsType> = (props) => {
    let inputValue: string = '';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        inputValue = e.target.value;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const text = inputValue.trim();
        if (text === '') {
            return;
        }
        props.onSubmit(text);
        inputValue = '';
    };

    return (
        <div>
            <form onSubmit={e => {handleSubmit(e)}}>
                <input onChange={e => {handleChange(e)}} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
};

export default addTodo;
