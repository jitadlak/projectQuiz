import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';
import quizReducer from './quizSlice';
// import { createStore } from "@reduxjs/toolkit";


const reducer = combineReducers({
    auth: authReducer,
    quiz: quizReducer,
})
const store = configureStore({
    reducer,
})


export default store;