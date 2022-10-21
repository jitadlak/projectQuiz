import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import { themeGreen, UIColor, windowWidth, secondryColor } from '../utils/config';
import { Card } from 'react-native-shadow-cards';
import Lottie from 'lottie-react-native';


const SingleTestDetails = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={{ margin: 20, marginTop: 5 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <Text style={styles.head2}>GS-IV ETHICS INTEGRITY APPTITUDE</Text>

                    </View>

                </View>
            </View>
            <View style={styles.subcontainer}>

                <ScrollView style={styles.scrollview}>
                    <Card
                        style={styles.cardStyle}
                        elevation={10}
                        cornerRadius={10}
                        backgroundColor={UIColor.color4}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 10 }}>
                            <View>
                                <Text style={styles.cardText}>
                                    UNIT - 1
                                </Text>
                                <Text style={styles.cardText}>
                                    Ethics and Humans Interface
                                </Text>
                                <Text style={styles.cardText}>
                                    Number Of Questions : 80
                                </Text>

                                <TouchableOpacity style={styles.btn}>
                                    <Text style={styles.btnText}>
                                        Price  : 1500$
                                    </Text>
                                </TouchableOpacity>

                            </View>
                            {/* <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../assets/images/lock.png')}
                                    style={styles.statusImg}
                                />

                            </View> */}
                        </View>
                    </Card>
                    {/* <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.btn2}>
                            <Text style={styles.btnText2}>ATTEMPT TEST</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn2}>
                            <Text style={styles.btnText2}>ATTEMPT LATER</Text>
                        </TouchableOpacity>


                    </View> */}
                    <TouchableOpacity style={styles.btn3} onPress={() => navigation.navigate('Quiz')}>
                        <Lottie source={require('../assets/images/buy-now.json')} autoPlay loop
                            style={{ height: 40, width: 30, marginTop: 5 }}
                        />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
};

export default SingleTestDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeGreen,
    },
    head1: {
        fontSize: 30,
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 5,
    },
    head2: {
        fontSize: 18,
        color: '#ffffff',
        marginTop: 10,
        alignSelf: 'center'
    },
    subcontainer: {

        height: '100%',
        margintop: 10,
        backgroundColor: '#ffffff',
        paddingBottom: 50
    },
    scrollview: {
        margin: 16,
        marginTop: 15,

    },
    btnText: {
        color: secondryColor,
        fontSize: 18,
        fontWeight: 'bold',

    },
    input: {
        height: 40,
        borderBottomWidth: 2,
        borderColor: 'lightgray',
        color: 'black',
    },
    btn: {

        backgroundColor: themeGreen,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 25,
        padding: 10,


    },
    cardStyle: {
        padding: 5,
        margin: 10,
        // width: '95%',

        marginLeft: 2,
        // alignItems: 'center',
        justifyContent: 'center',

    },
    cardText: {
        fontFamily: 'arial',
        fontSize: 15,
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 5
    },
    statusImg: {
        height: 25,
        width: 25,

    },
    btn2: {

        backgroundColor: themeGreen,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,

        padding: 10,
        marginTop: 5

    },
    btnText2: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',

    },
    btn3: {

        backgroundColor: secondryColor,
        alignItems: 'center',
        justifyContent: 'center',



        marginTop: 20

    },
    btnText3: {
        color: themeGreen,
        fontSize: 16,
        fontWeight: 'bold',

    },
});