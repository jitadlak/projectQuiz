import { showSuccess, showError } from "../components/Snackbar";
import axios from "axios";
import { LoginUrl } from "../utils/urls";
import AsyncStorage from '@react-native-async-storage/async-storage';
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        userData: [],
        loading: false,
        quiz: []
    },
    reducers: {
        login(state, action) {
            state.token = action.payload;
        },
        setUser(state, action) {
            state.userData = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        signup(state, action) {
            return state;
        },
    }
});

export const { login, signup, setUser, setLoading } = authSlice.actions;
export default authSlice.reducer;

export function Loginfunction(data) {
    return async function LoginThunk(dispatch, getState) {
        console.log(data)
        try {
            dispatch(setLoading(true));
            const res = await axios.post(LoginUrl, data)

            if (res.data.status == 401) {
                dispatch(setLoading(false));
                console.log(res.data, 'result')
                return showError(res.data.message)
            }
            let Resultdata = res.data
            await AsyncStorage.setItem('Auth_Token', Resultdata.jwt_token);
            await AsyncStorage.setItem('User_Data', JSON.stringify(Resultdata.result[0]));
            dispatch(login(Resultdata.result[0].id))
            dispatch(setUser(Resultdata.result[0]))

            dispatch(setLoading(false));

            console.log(Resultdata, 'result')
        } catch (error) {
            dispatch(setLoading(false));
            console.log(error)
        }
    }
}