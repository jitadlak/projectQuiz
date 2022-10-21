import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { themeGreen, secondryColor } from '../utils/config'
import { useSelector, useDispatch } from 'react-redux'
import { Loginfunction } from '../redux/authSlice'
import { showError } from '../components/Snackbar'
import Loader from '../components/Loader'
const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const { loading } = useSelector(state => state.auth);
    console.log(loading, 'loading state')
    const { token } = useSelector(state => state.auth);
    const { userData } = useSelector(state => state.auth);

    console.log(token, 'token state')
    console.log(userData, 'userData state')
    const onsubmit = () => {
        if (!Email || !Password) {
            return showError("All Fields Required !!")
        }
        else {
            let data = {
                "email": Email,
                "password": Password
            }

            dispatch(Loginfunction(data));
        }
    }

    return (
        <View style={styles.container}>
            {loading ? <Loader /> :
                <ScrollView>
                    <View style={{ margin: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../assets/images/ias-aashram-logo.jpg')}
                                style={{ height: 100, width: 100, borderRadius: 50 }}

                            />
                            {/* <Text style={{ fontSize: 20, color: '#ffffff', textDecorationLine: 'underline' }}>Sign In </Text> */}
                        </View>
                        <Text style={styles.head1}>Welcome to AASHRAM IAS ACADEMY! </Text>
                        <Text style={styles.head2}>Sign in to continue ...</Text>
                    </View>
                    <View style={styles.subcontainer}>
                        <ScrollView style={styles.scrollview}>
                            <Text style={styles.labelText}>Email Address</Text>
                            <TextInput
                                style={styles.input}
                                value={Email}
                                onChangeText={(e) => setEmail(e)}
                            />
                            <View
                                style={{ height: 20 }}
                            />
                            <Text style={styles.labelText}>Password</Text>
                            <TextInput
                                style={styles.input}
                                secureTextEntry
                                value={Password}
                                onChangeText={(e) => setPassword(e)}
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 20 }}>
                                    <Text
                                        style={{ fontSize: 16, fontWeight: 'bold', color: 'orange' }}
                                    >Forget Password ?</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 20 }}
                                    onPress={() => navigation.navigate("SignUp")}
                                >
                                    <Text
                                        style={{ fontSize: 16, fontWeight: 'bold', color: '#000000' }}
                                    >Sign Up</Text>
                                </TouchableOpacity>

                            </View>

                            <TouchableOpacity style={styles.btn}
                                onPress={() => onsubmit()}
                            >
                                <Text
                                    style={{ fontSize: 20, fontWeight: 'bold', color: secondryColor }}
                                >SIGN IN</Text>
                            </TouchableOpacity>
                            <Text
                                style={{ fontSize: 16, fontWeight: 'bold', color: 'gray', alignSelf: 'center', margin: 15 }}
                            >- Or You Can Also - </Text>

                            <TouchableOpacity style={styles.socialbtn}>
                                <Image
                                    source={require('../assets/images/google.png')}
                                    style={{ height: 30, width: 30 }}
                                />
                                <Text style={styles.socialbtnText}>SIGN IN WITH GOOGLE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.socialbtn}>
                                <Image
                                    source={require('../assets/images/facebook.png')}
                                    style={{ height: 30, width: 30 }}
                                />
                                <Text style={styles.socialbtnText}>SIGN IN WITH FACEBOOK</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </ScrollView>
            }

        </View >
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeGreen
    },
    head1: {
        fontSize: 25,
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 10
    },
    head2: {
        fontSize: 17,
        color: '#ffffff',
        marginTop: 10
    },
    subcontainer: {
        //  height: 550,
        margintop: 10,
        backgroundColor: '#ffffff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30

    },
    scrollview: {
        margin: 30
    },
    labelText: {
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold',

    },
    input: {
        height: 40,
        borderBottomWidth: 2,
        borderColor: themeGreen,
        color: themeGreen,
        fontSize: 16,
        fontWeight: 'bold',

    },
    btn: {
        height: 50,
        backgroundColor: themeGreen,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 25
    },
    socialbtn: {
        height: 50,
        borderWidth: 1,
        marginTop: 10,
        borderColor: 'gray',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    socialbtnText: {
        color: 'gray',
        fontWeight: 'bold'
    }
})