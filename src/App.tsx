


import React, { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import fetchProducts from './redux/actions/action';
import { getUsers, getUsersError } from './redux/reducers/user.reducer';
import SearchInput from './componenets/SearchInput';
import SearchType from './componenets/SearchType';
import './App.css';

function App() {
  const [searchVal, setSearchVal] = useState('');
  const [isUserSelected, setIsUserSelected] = useState(true)
  const dispatch = useDispatch();

  const users = useSelector(getUsers);
  const usersErrorMsg = useSelector(getUsersError);

  const fetchData = useCallback(
    () => dispatch(fetchProducts(searchVal, isUserSelected)),
    [searchVal]
  );

  const getUsersList = () => {
    fetchData();
  }

  const onSearchValChanged = (val: any) => {
    setSearchVal(val);
    if (searchVal) {
      console.log("-----searchVal====", searchVal);
      getUsersList()
    }
  }


  const onSearchTypeChanged = (type: string) => {
    type === "user" ? setIsUserSelected(true) : setIsUserSelected(false);
    setSearchVal("");
  }

  useEffect(() => {
    console.log("test");
  }, [])

  return (
    <div>
      <SearchType onSearchTypeChanged={onSearchTypeChanged} />
      <SearchInput onSearchValChanged={onSearchValChanged} />
      { usersErrorMsg && <div >Error : ${usersErrorMsg} </div>}
      {!usersErrorMsg && JSON.stringify(users)}
    </div>
  );
}

export default App;
