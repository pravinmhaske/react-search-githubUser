import { FETCH_DATA_PENDING, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './../types/types';
import { APP_URL, USR_URL, REPO_URL } from './../../constants/constant'
import { IUserRes } from '../../models/User';
import { IRepoRes } from '../../models/repo';

function fetchUsersPending() {
    return {
        type: FETCH_DATA_PENDING
    }
}

function fetchUsersSuccess(Users: any) {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: Users
    }
}

function fetchUsersError(error: any) {
    return {
        type: FETCH_DATA_ERROR,
        error
    }
}

function fetchProducts(searchVal: string, isUserSelected: boolean) {
    return async (dispatch: (arg0: { type: string; products?: any; error?: any; }) => void) => {
        dispatch(fetchUsersPending());
        const urlChunk = isUserSelected ? USR_URL : REPO_URL;
        try {
            const res = await fetch(`${APP_URL}${urlChunk}${searchVal}`);
            const resJson: (IUserRes | IRepoRes) = await res.json();
            if (resJson.message) { //as message is part of error response
                throw (resJson.message);
            }
            dispatch(fetchUsersSuccess(resJson));

        } catch (error) {
            dispatch(fetchUsersError(error));
        }
    }
}

export default fetchProducts;