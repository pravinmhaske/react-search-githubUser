import { FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from './../types/types';
import { APP_URL, USR_URL, REPO_URL } from './../../constants/constant'

function fetchUsersPending() {
    return {
        type: FETCH_USERS_PENDING
    }
}

function fetchUsersSuccess(Users: any) {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: Users
    }
}

function fetchUsersError(error: any) {
    return {
        type: FETCH_USERS_ERROR,
        error
    }
}

function fetchProducts(searchVal: string, isUserSelected: boolean) {
    return (dispatch: (arg0: { type: string; products?: any; error?: any; }) => void) => {
        dispatch(fetchUsersPending());
        const urlChunk = isUserSelected ? USR_URL : REPO_URL;
        // fetch('https://api.github.com/users/mojombo')
        fetch(`${APP_URL}${urlChunk}${searchVal}`)
            // https://api.github.com/search/users?q=pravinmhaske
            .then(res => res.json())
            .then(res => {
                console.log("resrrr ", res)
                if (res.message) { //as message is part of error response
                    throw (res.message);
                }
                dispatch(fetchUsersSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchUsersError(error));
            })
    }
}

export default fetchProducts;