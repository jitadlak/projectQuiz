import { showSuccess, showError } from "../components/Snackbar";
import axios from "axios";
import { LoginUrl } from "../utils/urls";
import AsyncStorage from '@react-native-async-storage/async-storage';
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {

        quiz: [],
        loading: false,
    },
    reducers: {

        setQuiz(state, action) {
            state.quiz = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },

    }
});

export const { setQuiz } = quizSlice.actions;
export default quizSlice.reducer;