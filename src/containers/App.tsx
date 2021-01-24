


import React, { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import fetchProducts from '../redux/actions/action';
import { getResponse, getUsersError, getUsersPending } from '../redux/reducers/user.reducer';
import SearchInput from './SearchInput';
import SearchType from './SearchType';
import styled from 'styled-components';
import './App.scss';
import ErrorBoundary from './ErrorBoundary';
import UserList from '../componenets/UserList';
import Loader from '../componenets/Loader';
import RepoList from '../componenets/RepoList';

function ErrorFallback() {
  return (
    <div role="alert">
      <p>Something went wrong. We can integrate our on retry logic here.</p>
    </div>
  )
}

const App: React.FC = (): JSX.Element => {
  const [searchVal, setSearchVal] = useState('');
  const [isUserSelected, setIsUserSelected] = useState(true);

  const dispatch = useDispatch();

  const response = useSelector(getResponse);
  const usersErrorMsg = useSelector(getUsersError);
  const loading = useSelector(getUsersPending);

  const getUsersList = () => {
    dispatch(fetchProducts(searchVal, isUserSelected));
  }

  const onSearchValChanged = (val: any) => {
    setSearchVal(val)
    // if (val && val.length > 2) {
    console.log("-----searchVal====", searchVal, " ooooo val ", val);
    getUsersList()
    // }

  }

  const onSearchTypeChanged = (type: string) => {
    type === "user" ? setIsUserSelected(true) : setIsUserSelected(false);
  }

  const Wrapper = styled.section`
    padding: 4em;
  `;

  let responseDom;
  if (loading) {
    responseDom = <Loader></Loader>
  } else if (response) {
    responseDom = isUserSelected ? <UserList users={response} /> : <> <RepoList repos={response}></RepoList></>;
  } else if (usersErrorMsg) {
    responseDom = <div >Error : ${usersErrorMsg} </div>
  }

  return (
    <Wrapper>
      {/* <ErrorBoundary 
        FallbackComponent={ErrorFallback} > */}
      <div className={searchVal === '' ? 'alignCenter flexContainer' : 'flexContainer'}>

        <div style={{ padding: '.8%' }}>
          <img style={{ height: 70, width: 70, borderRadius: '50%' }} className="image" src="https://www.washingtonpost.com/resizer/9YWv-qOa9uW7CQZ9UGiW23eTZzU=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/BTCNJJN2Y43KPHPXPQWPASXRKM.jpg" alt="Avatar" />
        </div>
        <div>
          <p> <b>Github Searcher</b></p>
          <span>Search Users or repositories below</span>
        </div>
      </div>
      <div className={searchVal === '' ? 'alignCenter flexContainer' : 'flexContainer'}>
        <div style={{ width: '25%' }}>
          {/* {searchVal} */}
          <SearchInput onSearchValChanged={onSearchValChanged} />
        </div>
        <div>
          <SearchType onSearchTypeChanged={onSearchTypeChanged} />
        </div>
      </div>
      {responseDom}
      {/* </ErrorBoundary> */}
    </Wrapper>
  );
}



export default App;


