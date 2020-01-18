import {Action} from 'redux';

type showAllType = {
    type: 'SHOW_ALL',
};

type showCompletedType = {
    type: 'SHOW_COMPLETED',
};

type showActiveType = {
    type: 'SHOW_ACTIVE',
};

export type filterType = showAllType | showCompletedType | showActiveType;

export const showAll = (): filterType => {
    return {
        type: 'SHOW_ALL',
    };
};

export const showCompleted = (): filterType => {
    return {
        type: 'SHOW_COMPLETED',
    };
};

export const showActive = (): filterType => {
    return {
        type: 'SHOW_ACTIVE',
    };
};

export type setVisibilityFilterPayload = {
    filter: filterType;
};

export interface setVisibilityFilterActions extends Action {
    type: 'SET_VISIBILITY_FILTER',
    payload: setVisibilityFilterPayload
}

export const setVisibilityFilter = (payload: setVisibilityFilterPayload): setVisibilityFilterActions => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        payload
    }
};
