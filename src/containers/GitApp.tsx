import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from "react-redux";
import fetchProducts from '../redux/actions/action';
import { getUsers } from '../redux/reducers/user.reducer';

const GitApp = () => {
    const dispatch = useDispatch();
    const fetchData = useCallback(
        () => dispatch(fetchProducts()),
        [dispatch]
    );

    const localize11 = useSelector(getUsers);

    useEffect(() => {
        const getUsers = async () => {
            await fetchData();;
        }
        let tt = getUsers();
        // setstate(tt)
        // localize11 = useSelector(getProducts);
    }, [])
    return (
        <div>
            test pravin
            {JSON.stringify(localize11)}
        </div>
    )
}

GitApp.propTypes = {

}

export default GitApp
