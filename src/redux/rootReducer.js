import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    posts: [
        {
            id:	'0',
            title: '怎么肯能跟我分手', 
            content: 'Some content',
            creator: 'Creator',
            created_at:	'2020年8月3日',
            updated_at:	'string (date-time)'
        },
        {
            id:	'1',
            title: '下午的事情', 
            content: 'Some content',
            creator: 'Creator',
            created_at:	'2020年8月3日',
            updated_at:	'string (date-time)'
        }
    ],
    currentUser: {},
    selectedItem: [],
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
        setSelectedItem(state, action) {
            
            if(!action.payload) {
                console.log('action.payload == 0')
                state.selectedItem = []
            } else {
                state.selectedItem = state.posts.filter(post => post.id === action.payload)
            }
            
        }
    }
});

export default reducerNew.reducer;
export const { createUser, signin, signout, createPost, updatePost, setSelectedItem } = reducerNew.actions;