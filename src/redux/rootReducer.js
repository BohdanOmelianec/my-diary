import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    selectedId: '',
    isOnline: false,
    token: '',
    firstLoading: true
}

const reducerNew = createSlice({
    name: 'reducer',
    initialState,
    reducers: {
        setToken(state, action) {//use
            state.token = action.payload
            state.isOnline = true
        },
        setPosts(state, action) {//use
            state.posts = action.payload
        },
        addPost(state, action) {
            state.posts = [...state.posts, action.payload]
        },
        setFirstLoading(state, action) {
            state.firstLoading = action.payload
        },
        signin(state, action) {
            state.isOnline = true
            state.currentUser = action.payload
        },
        signout(state) {//use
            state.posts = [];
            state.selectedId = '';
            state.isOnline = false;
            state.token = '';
        },
        createPost(state, action) {
            state.posts = [...state.posts, {id: state.posts.length, ...action.payload}]
        },
        updatePost(state, action) {
            state.posts = state.posts.map(post => {
                if(post.id === action.payload.id) {
                   return action.payload 
                } 
                return post;
            })
        },
        setSelectedId(state, action) {//use
            if(!action.payload) {
                state.selectedId = ''
            } else {
                state.selectedId = action.payload
            }
            
        }
    }
});

export default reducerNew.reducer;
export const { signin, signout, setPosts, setSelectedId, setToken, addPost, setFirstLoading } = reducerNew.actions;