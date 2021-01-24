


import React, { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import fetchProducts from './redux/actions/action';
import { getUsers, getUsersError, getUsersPending } from './redux/reducers/user.reducer';
import SearchInput from './componenets/SearchInput';
import SearchType from './componenets/SearchType';
import styled from 'styled-components';
import './App.css';
import ErrorBoundary from './componenets/ErrorBoundary';
import User from './componenets/User';
import UserList from './componenets/UserList';
import Loader from './componenets/Loader';
function ErrorFallback() {
  return (
    <div role="alert">
      <p>Something went wrong. We can integrate our on retry logic here.</p>
    </div>
  )
}

function App() {
  const [searchVal, setSearchVal] = useState('pravin');
  const [isUserSelected, setIsUserSelected] = useState(true);

  // const [flushInputValue, setFlushInputValue] = useState(false)
  const dispatch = useDispatch();

  const users = useSelector(getUsers);
  const usersErrorMsg = useSelector(getUsersError);
  const loading = useSelector(getUsersPending);

  // const fetchData = useCallback(
  //   () => dispatch(fetchProducts(searchVal, isUserSelected)),
  //   []
  // );

  const getUsersList = () => {
    // fetchData();
    dispatch(fetchProducts(searchVal, isUserSelected));
  }

  const onSearchValChanged = (val: any) => {
    // setSearchVal(val);
    // setFlushInputValue(false);
    // setSearchVal(val)
    if (val && val.length > 2) {
      console.log("-----searchVal====", searchVal, " ooooo val ", val);
      getUsersList()
    }

  }


  const onSearchTypeChanged = (type: string) => {
    type === "user" ? setIsUserSelected(true) : setIsUserSelected(false);
  }

  const Wrapper = styled.section`
  padding: 4em;
`;

  let dom;
  if (loading) {
    dom = <Loader></Loader>
  } else if (users) {
    dom = isUserSelected ? <UserList users={users} /> : <> repo ayega yaha </>;
  } else {
    dom = <div >Error : ${usersErrorMsg} </div>
  }


  return (
    <Wrapper>
      {/* <ErrorBoundary 
        FallbackComponent={ErrorFallback} > */}

      <div className="flexContainer">

        <div style={{ padding: '.8%' }}>
          <img style={{ height: 70, width: 70, borderRadius: '50%' }} className="image" src="https://www.washingtonpost.com/resizer/9YWv-qOa9uW7CQZ9UGiW23eTZzU=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/BTCNJJN2Y43KPHPXPQWPASXRKM.jpg" alt="Avatar" />
        </div>
        <div>
          <p> <b>Github Searcher</b></p>
          <span>Search Users or repositories below</span>
        </div>
      </div>
      <div className="flexContainer">
        <div style={{ width: '25%' }}>
          {searchVal}
          <SearchInput onSearchValChanged={onSearchValChanged} />
        </div>
        <div>
          <SearchType onSearchTypeChanged={onSearchTypeChanged} />
        </div>
      </div>

      {dom}
      {/* </ErrorBoundary> */}
    </Wrapper>
  );
}



export default App;


