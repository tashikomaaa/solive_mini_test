import {
    FETCH_TEAMS,
} from '../actions/TeamsActions';

const initialState = {
    fetching: false,
    fetched: false,
    failed: false,
};

export const FetchTeamsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TEAMS:
            return {
                ...state,
                fetching: true,
                failed: false,
            };
        default:
            return state;
    }
};