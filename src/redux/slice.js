import { createSlice } from '@reduxjs/toolkit';

export const Slice = createSlice({
    name: 'Slice',
    initialState: {
        users: [],
        total_users: 0,
        searching: false,
        searchValue: ''
    },
    reducers: {
        fetchUsersRequested: (state, action) => {
            state.searching = true
            state.searchValue = action.payload.searchValue
        },
        paginateUsersRequested: (state, action) => {
            state.searchValue = action.payload.searchValue
        },
        fetchUsersSucceeded: (state, action) => {
            const { users, total_users } = { ...action.payload }
            state.users = users
            state.total_users = total_users
            state.searching = false
        }
    }
})

export const { 
    fetchUsersRequested,
    paginateUsersRequested,
    fetchUsersSucceeded
} = Slice.actions;

export default Slice.reducer;
