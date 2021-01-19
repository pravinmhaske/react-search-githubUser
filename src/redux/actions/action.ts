import { FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from './../types/types'

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





function fetchProducts() {
    return (dispatch: (arg0: { type: string; products?: any; error?: any; }) => void) => {
        dispatch(fetchUsersPending());
        // fetch('https://api.github.com/users/mojombo')
        fetch('https://api.github.com/users?q=sanm')

            .then(res => res.json())
            .then(res => {
                console.log("resrrr ", res)
                if (res.error) {
                    throw (res.error);
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