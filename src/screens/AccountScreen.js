import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Card } from 'react-native-shadow-cards';
import { themeGreen, UIColor, windowWidth, secondryColor } from '../utils/config';
import { useSelector, useDispatch } from 'react-redux'
import { login, setUser } from '../redux/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showSuccess } from '../components/Snackbar';
import { UserImgUrl } from '../utils/urls';
const AccountScreen = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false)
    const { userData } = useSelector(state => state.auth);
    const logoutFun = async () => {
        try {
            setLoading(true)
            await AsyncStorage.clear();
            dispatch(login(''));
            dispatch(setUser([]));
            setLoading(false)
            return showSuccess("You Are Logged Out !!")
        } catch (err) {
            setLoading(false)
            console.log(err);
        }
    }
    return (
        <View style={{ margin: 17 }}>
            <ScrollView>
                <Text style={styles.labelText}>Profile Picture</Text>
                <View style={{ height: 15 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={styles.piccontainer}>
                        <Image
                            source={{ uri: `${UserImgUrl}${userData.image}` }}
                            style={{ height: 100, width: 100 }}
                        />
                    </View>
                </View>
                <View>
                    <Card
                        style={styles.cardStyle}
                        elevation={10}
                        cornerRadius={0}
                    >
                        <Text style={styles.cardText}>
                            ACCOUNT CREATION DATE  : 13-10-2022
                        </Text>
                    </Card>
                    <TouchableOpacity style={styles.btn1} onPress={() => logoutFun()}>
                        <Text
                            style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}
                        >LOG OUT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text
                            style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}
                        >DELETE ACCOUNT</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    piccontainer: {
        height: 100,
        width: 100,
        backgroundColor: 'gray',

    },
    labelText: {
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold',
    },
    cardStyle: {
        padding: 12,
        margin: 5,
        // width: '95%',

        marginLeft: 2,
        justifyContent: 'center'


    },
    cardText: {
        fontFamily: 'arial',
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
    },
    subText: {
        fontFamily: 'arial',
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 5
    },
    btn: {
        height: 40,
        backgroundColor: themeGreen,
        alignItems: 'center',
        justifyContent: 'center',

        marginTop: 15,

    },
    btn1: {
        height: 40,
        backgroundColor: secondryColor,
        alignItems: 'center',
        justifyContent: 'center',

        marginTop: 15,

    },
})