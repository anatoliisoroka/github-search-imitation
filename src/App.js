import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// src
import './App.css'
import SearchInput from './components/SearchInput'
import UserCard from './components/UserCard'
import PaginationComponent from './components/PaginationComponent'
import { fetchUsersRequested } from './redux/slice';

function App() {
  const [searchValue, setSearchValue] = useState()

  const users = useSelector(state => state.users)
  const total_users = useSelector(state => state.total_users)
  const searching = useSelector(state => state.searching)

  const dispatch = useDispatch()

  const onSearch = (searchValue) => {
    setSearchValue(searchValue)

    dispatch(fetchUsersRequested({
      searchValue
    }));
  }

  return (
    <div className="App">
      <SearchInput onSearch={onSearch} />

      <div>
        {searching ? (
          <p>Searching users</p>
        ) : (!searching && total_users && users ? (
            <>
              <p>{total_users.toLocaleString()} users</p>
              <div>
                {users.map((user, index) => (
                  <UserCard url={user.url} key={index} />
                ))}

                <PaginationComponent />
              </div>
            </>
          ) : (
            searchValue && !searching && !total_users && (
              <p>We couldn't find any users matching '{searchValue}'</p>
            )
          )
        )}
      </div>
    </div>
  );
}

export default App;
