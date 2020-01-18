import {connect} from 'react-redux';
import {Action, Dispatch} from 'redux';

import {addTodo} from "../actions/todos";
import AddTodo from '../components/AddTodo';

const mapStateToProps = () => {
    return {}
};

const mapDipatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        onSubmit: (text: string) => {
            dispatch(addTodo({text: text}))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(AddTodo);
