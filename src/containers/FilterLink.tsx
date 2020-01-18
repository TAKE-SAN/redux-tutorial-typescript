import {connect} from 'react-redux';
import {Action, Dispatch} from 'redux';
import Link from '../components/Link';

import {setVisibilityFilter, filterType} from '../actions/visibilityFilters';
import {rootStateType} from '../reducers';

type ownPropsType = {
    filter: filterType
};

const mapStateToProps = (state: rootStateType, ownProps: ownPropsType) => {
    return {
        active: ownProps.filter === state.visibilityFilter.filter,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: ownPropsType) => {
    return {
        onClick: () => { dispatch(setVisibilityFilter({ filter: ownProps.filter })) },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);
