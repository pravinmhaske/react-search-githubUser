import { FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from '../types/types';

const initialState = {
    pending: false,
    users: [],
    error: null
}

export function usersReducer(state = initialState, action: { type: any; payload: any; error: any; }) {
    switch (action.type) {
        case FETCH_USERS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                pending: false,
                users: action.payload
            }
        case FETCH_USERS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getUsers = (state: { user: { users: any; }; }) => state.user.users;
export const getUsersPending = (state: { user: { pending: any; }; }) => state.user.pending;
export const getUsersError = (state: { user: { error: any; }; }) => state.user.error;