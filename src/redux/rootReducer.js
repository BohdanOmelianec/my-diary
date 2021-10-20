import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    currentUser: {},

    signedUp: false
}

const reducerNew = createSlice({
    name: 'reducer',
    initialState,
    reducers: {
        createUser(state, action) {
            state.users = [...state.users, action.payload]
            state.signedUp = true
            state.currentUser = action.payload
        },
        signin(state, action) {
            state.signedUp = true
            state.currentUser = action.payload
        },
        signout(state) {
            state.signedUp = false
            state.currentUser = {}
        }
    }
});

export default reducerNew.reducer;
export const { createUser, signin, signout } = reducerNew.actions;