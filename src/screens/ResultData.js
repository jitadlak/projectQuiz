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

const ResultData = () => {
    return (
        <Card style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center', alignSelf: 'flex-end' }}>
                <Text style={{ padding: 10, backgroundColor: secondryColor, color: 'black' }}>Avinash Sir's Video</Text>
                <Lottie source={require('../assets/images/youtube.json')} autoPlay loop
                    style={{ height: 70, width: 70 }}
                />
            </View>
            <View>
                <Lottie source={require('../assets/images/trophy.json')} autoPlay loop
                    style={{ height: 150, width: 150, marginTop: 5 }}
                />
            </View>
            <View >
                <View style={styles.listview}>
                    <Card
                        style={styles.cardStyle}
                        elevation={10}
                        cornerRadius={0}
                    >
                        <Text style={styles.cardText}>
                            Your Current Score
                        </Text>
                    </Card>
                    <Card
                        style={styles.cardStyle}
                        elevation={10}
                        cornerRadius={0}
                    >
                        <Text style={styles.cardText}>
                            876
                        </Text>
                    </Card>
                </View>
                <View style={styles.listview}>
                    <Card
                        style={styles.cardStyle}
                        elevation={10}
                        cornerRadius={0}
                    >
                        <Text style={styles.cardText}>
                            Date
                        </Text>
                    </Card>
                    <Card
                        style={styles.cardStyle}
                        elevation={10}
                        cornerRadius={0}
                    >
                        <Text style={styles.cardText}>
                            23-10-2022
                        </Text>
                    </Card>
                </View>
                <View style={styles.listview}>
                    <Card
                        style={styles.cardStyle}
                        elevation={10}
                        cornerRadius={0}
                    >
                        <Text style={styles.cardText}>
                            Time Taken
                        </Text>
                    </Card>
                    <Card
                        style={styles.cardStyle}
                        elevation={10}
                        cornerRadius={0}
                    >
                        <Text style={styles.cardText}>
                            30 Min
                        </Text>
                    </Card>
                </View>
                <View style={styles.listview}>
                    <Card
                        style={styles.cardStyle}
                        elevation={10}
                        cornerRadius={0}
                    >
                        <Text style={styles.cardText}>
                            Your Best Score
                        </Text>
                    </Card>
                    <Card
                        style={styles.cardStyle}
                        elevation={10}
                        cornerRadius={0}
                    >
                        <Text style={styles.cardText}>
                            976
                        </Text>
                    </Card>
                </View>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Try Again ?</Text>
            </TouchableOpacity>
        </Card>
    )
}

export default ResultData

const styles = StyleSheet.create({
    container: {
        flex: 1,

        margin: 20,
        borderRadius: 15,
        borderColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',

    },
    cardStyle: {
        padding: 5,
        margin: 5,
        width: 150,


        justifyContent: 'center',
        alignItems: 'center'


    },
    cardText: {
        fontFamily: 'arial',
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
    },
    listview: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
    btn: {
        padding: 10, width: '90%', alignItems: 'center', justifyContent: 'center', backgroundColor: themeGreen,
        margin: 20,

    },
    btnText: {
        color: secondryColor,
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'arial'
    }

})