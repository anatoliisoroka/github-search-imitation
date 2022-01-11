import { all, delay, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios'
// src
import { fetchUsersRequested, paginateUsersRequested, fetchUsersSucceeded } from '../redux/slice';

function* fetchUsers(action) {
    yield delay(1000);

    const { searchValue, page } = { ...action.payload };

    const params = {
        q: searchValue,
        per_page: 10,
        page
    }
  
    try {
        const { data } = yield axios.get('https://api.github.com/search/users', { params });

        yield put(fetchUsersSucceeded({ 
            users: data.items,
            total_users: data.total_count
        }));
    } catch (error) {
        yield put(fetchUsersSucceeded({ 
            users: [],
            total_users: 0
        }));
    }
}

function* rootSaga() {
    yield all([
        yield takeLatest(fetchUsersRequested, fetchUsers),
        yield takeLatest(paginateUsersRequested, fetchUsers)
    ])
}
  
export default rootSaga
