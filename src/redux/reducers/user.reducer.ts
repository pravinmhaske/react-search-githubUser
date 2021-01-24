import { FETCH_DATA_PENDING, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from '../types/types';

const initialState = {
    pending: false,
    users: [],
    error: null
}

export function usersReducer(state = initialState, action: { type: any; payload: any; error: any; }) {
    switch (action.type) {
        case FETCH_DATA_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                pending: false,
                response: action.payload
            }
        case FETCH_DATA_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getResponse = (state: { user: { response: any; }; }) => state.user.response;
export const getUsersPending = (state: { user: { pending: any; }; }) => state.user.pending;
export const getUsersError = (state: { user: { error: any; }; }) => state.user.error;