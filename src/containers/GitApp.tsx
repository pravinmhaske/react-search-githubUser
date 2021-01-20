import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from "react-redux";
import fetchProducts from '../redux/actions/action';
import { getUsers } from '../redux/reducers/user.reducer';
import SearchInput from '../componenets/SearchInput';

const GitApp = () => {
    const dispatch = useDispatch();

    const fetchData = useCallback(
        () => dispatch(fetchProducts()),
        [dispatch]
    );

    const getUsersList = () => {
        fetchData();
    }

    const onSearchValChanged = (val: any) => {
        getUsersList()
    }

    const localize11 = useSelector(getUsers);

    useEffect(() => {
        console.log("test");
    }, [])
    return (
        <div>
            test pravin
            <SearchInput onSearchValChanged={onSearchValChanged} />
            {JSON.stringify(localize11)}
        </div>
    )
}

GitApp.propTypes = {

}

export default GitApp
