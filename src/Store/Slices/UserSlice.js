import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    users: [],
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'Users',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setUsers: (state, action) => {
            state.users = action.payload
            state.loading = false
            state.error = null
        }
    }
})

export const{ 
    setLoading,
    setError,
    setUsers
} = userSlice.actions

//Selectors:

export const selectAllUsers = (state) => state.Users.users

export const selectLoading = (state) => state.Users.loading

export const selectError = (state) => state.Users.error


//Export this page.
export default userSlice.reducer
