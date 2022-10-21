import { useEffect } from "react";
import MainStack from "./MainStack";
import AuthStack from "./AuthStack";
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login, setUser } from "../redux/authSlice";
export default function Routes() {
    useEffect(() => {
        gettoken()
    }, [])
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.auth);
    const gettoken = async () => {
        let token1 = await AsyncStorage.getItem("Auth_Token");
        let userdata = await AsyncStorage.getItem("User_Data");
        console.log(token)
        console.log(token1)
        console.log(userdata, 'userData')
        if (token1) {
            dispatch(login(token1))
            dispatch(setUser(JSON.parse(userdata)))
        }
    }


    return (
        token ? MainStack() : AuthStack()
    )
}