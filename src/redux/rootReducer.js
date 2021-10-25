import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    selectedId: '',
    isOnline: false,
    token: '',
}

const reducerNew = createSlice({
    name: 'reducer',
    initialState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            state.isOnline = true
        },
        setPosts(state, action) {
            state.posts = action.payload
        },
        signout(state) {
            state.posts = [];
            state.selectedId = '';
            state.isOnline = false;
            state.token = '';
        },
        setSelectedId(state, action) {
            if(!action.payload) {
                state.selectedId = ''
            } else {
                state.selectedId = action.payload
            }
            
        }
    }
});

export default reducerNew.reducer;
export const { setToken, setPosts, signout, setSelectedId } = reducerNew.actions;