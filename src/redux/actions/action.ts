// import { FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from './../types/types'

// function fetchUsersPending() {
//     return {
//         type: FETCH_USERS_PENDING
//     }
// }

// function fetchUsersSuccess(Users: any) {
//     return {
//         type: FETCH_USERS_SUCCESS,
//         Users: Users
//     }
// }

// function fetchUsersError(error: any) {
//     return {
//         type: FETCH_USERS_ERROR,
//         error: error
//     }
// }
export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

function fetchProductsPending() {
    return {
        type: FETCH_PRODUCTS_PENDING
    }
}

function fetchProductsSuccess(products: any) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

function fetchProductsError(error: any) {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error
    }
}


function fetchProducts() {
    return (dispatch: (arg0: { type: string; products?: any; error?: any; }) => void) => {
        dispatch(fetchProductsPending());
        // fetch('https://api.github.com/users/mojombo')
        fetch('https://api.github.com/users?q=sanm')

            .then(res => res.json())
            .then(res => {
                console.log("resrrr ", res)
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchProductsSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchProductsError(error));
            })
    }
}

export default fetchProducts;