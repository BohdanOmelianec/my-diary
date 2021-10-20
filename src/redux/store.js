import reducerNew from './rootReducer';

import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";

// const rootReducer = combineReducers({
//     reducerNew,
// })


const store = configureStore({
    reducer: {reducerNew},
    devTools: process.env.NODE_ENV !== 'production'
});


export default store;