import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { themeGreen, UIColor, windowWidth } from '../utils/config';
import { Card } from 'react-native-shadow-cards';
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../components/Loader'
import axios from 'axios';
import { TestCategoryUrl } from '../utils/urls';
import { showError, showSuccess } from '../components/Snackbar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
    const { userData } = useSelector(state => state.auth);
    const { token } = useSelector(state => state.auth);
    const { quiz } = useSelector(state => state.quiz);
    const [loading, setLoading] = useState(false)
    console.log(userData, 'userdata')
    console.log(quiz, 'quizData')
    console.log(token, 'token')

    useEffect(() => {
        getCategory()
    }, [])

    const getCategory = async () => {
        try {

            // const config = {
            //     headers: { Authorization: token },
            // };
            // const token = await AsyncStorage.getItem('Auth_Token')
            console.log(token, 'tokenx')
            setLoading(true)
            const res = await axios.get(TestCategoryUrl,
                { headers: { "Authorization": `Bearer ${token}` } }

            )
            console.log(res, 'res')
            if (res.status == 200) {
                setLoading(false)
                //showSuccess('data fetched')
            } else {
                setLoading(false)
                showError(res.data.message)
            }

            // console.log(data, 'formData')
        } catch (error) {
            setLoading(false)
            console.log(error, 'res')
            return showError('Something Went Wrong !!')
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ margin: 20, marginTop: 5 }}>
                {/* <Image
                    source={require('../assets/images/ias-aashram-logo.jpg')}
                    style={{ height: 100, width: 100 }}
                /> */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <View>
                        <Text style={styles.head1}>Hi, {userData?.first_name}</Text>
                        <Text style={styles.head2}>Find Your Favourite Test Here ...</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                        <Image
                            source={require('../assets/images/ias-aashram-logo.jpg')}
                            style={{ height: 100, width: 100, borderRadius: 35 }}
                        />
                        {/* <Text style={{ alignSelf: 'center', color: '#ffffff' }}>Profile</Text> */}
                    </TouchableOpacity>
                </View>
            </View>
            {loading ? <Loader /> :
                <View style={styles.subcontainer}>
                    <View style={{ marginLeft: 30, marginRight: 30, marginTop: 15 }}>
                        {/* <Image
                            source={require('../assets/images/mainimg.png')}
                            style={{ height: 100, width: 200, alignSelf: 'center' }}
                        /> */}
                        <Text style={styles.labelText}>Let's Begin To Learn !!</Text>
                    </View>
                    <ScrollView style={styles.scrollview}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TestDetails')}>
                                <Card
                                    style={styles.cardStyle}
                                    elevation={10}
                                    cornerRadius={10}
                                    backgroundColor={UIColor.color4}>
                                    <Text style={styles.cardText}>
                                        GS-IV : Ethics Integrity Aptitude
                                    </Text>
                                </Card>
                            </TouchableOpacity>

                            <Card
                                style={styles.cardStyle}
                                elevation={10}
                                cornerRadius={10}
                                backgroundColor={UIColor.color7}>
                                <Text style={styles.cardText}>Philosophy</Text>
                            </Card>

                            <Card
                                style={styles.cardStyle}
                                elevation={10}
                                cornerRadius={10}
                                backgroundColor={UIColor.color6}>
                                <Text style={styles.cardText}>Logical Reasoning</Text>
                            </Card>

                            <Card
                                style={styles.cardStyle}
                                elevation={10}
                                cornerRadius={10}
                                backgroundColor={UIColor.color8}>
                                <Text style={styles.cardText}>Compherensive English</Text>
                            </Card>
                            <Card
                                style={styles.cardStyle}
                                elevation={10}
                                cornerRadius={10}
                                backgroundColor={UIColor.color3}>
                                <Text style={styles.cardText}>Historical </Text>
                            </Card>
                            <Card
                                style={styles.cardStyle}
                                elevation={10}
                                cornerRadius={10}
                                backgroundColor={UIColor.color2}>
                                <Text style={styles.cardText}>Geograhical </Text>
                            </Card>
                        </View>
                    </ScrollView>
                </View>
            }
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeGreen,
    },
    head1: {
        fontSize: 30,
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 30,
    },
    head2: {
        fontSize: 17,
        color: '#ffffff',
        marginTop: 10,
    },
    subcontainer: {
        height: '85%',
        margintop: 10,
        backgroundColor: '#ffffff',

    },
    scrollview: {
        margin: 16,
        marginTop: 15,
    },
    labelText: {
        color: themeGreen,
        fontSize: 20,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderBottomWidth: 2,
        borderColor: 'lightgray',
        color: 'black',
    },
    btn: {
        height: 50,
        backgroundColor: themeGreen,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 25,
    },
    cardStyle: {
        padding: 5,
        margin: 10,
        // width: '95%',
        height: 100,
        marginLeft: 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    cardText: {
        fontFamily: 'arial',
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
    },
});
