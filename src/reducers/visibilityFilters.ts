import {showAll, filterType, setVisibilityFilterActions} from '../actions/visibilityFilters';

type actions = setVisibilityFilterActions;

export type stateType = {
    filter: filterType
};

const initialState: stateType = {
    filter: showAll()
};

export const visibilityFilterReducer = (state: stateType = initialState, action: actions) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return {
                filter: action.payload.filter
            };
        default:
            return state
    }
};
