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


const TestDetails = ({ navigation }) => {

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
                    <TouchableOpacity onPress={() => navigation.navigate('SingleTestDetails')}>
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
                                        <Text style={styles.btnText}>Locked</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        source={require('../assets/images/lock.png')}
                                        style={styles.statusImg}
                                    />

                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>
                    <Card
                        style={styles.cardStyle}
                        elevation={10}
                        cornerRadius={10}
                        backgroundColor={UIColor.color4}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 10 }}>
                            <View>
                                <Text style={styles.cardText}>
                                    UNIT - 2
                                </Text>
                                <Text style={styles.cardText}>
                                    Ethics and Humans Interface
                                </Text>
                                <Text style={styles.cardText}>
                                    Number Of Questions : 80
                                </Text>
                                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Result')}>
                                    <Text style={styles.btnText}>Completed</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../assets/images/unlock.png')}
                                    style={styles.statusImg}
                                />

                            </View>
                        </View>
                    </Card>
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
                                    <Text style={styles.btnText}>Locked</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../assets/images/lock.png')}
                                    style={styles.statusImg}
                                />

                            </View>
                        </View>
                    </Card>
                    <Card
                        style={styles.cardStyle}
                        elevation={10}
                        cornerRadius={10}
                        backgroundColor={UIColor.color4}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 10 }}>
                            <View>
                                <Text style={styles.cardText}>
                                    UNIT - 2
                                </Text>
                                <Text style={styles.cardText}>
                                    Ethics and Humans Interface
                                </Text>
                                <Text style={styles.cardText}>
                                    Number Of Questions : 80
                                </Text>
                                <TouchableOpacity style={styles.btn}>
                                    <Text style={styles.btnText}>Not Started</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../assets/images/unlock.png')}
                                    style={styles.statusImg}
                                />

                            </View>
                        </View>
                    </Card>
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
                                    <Text style={styles.btnText}>Locked</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../assets/images/lock.png')}
                                    style={styles.statusImg}
                                />

                            </View>
                        </View>
                    </Card>
                    <Card
                        style={styles.cardStyle}
                        elevation={10}
                        cornerRadius={10}
                        backgroundColor={UIColor.color4}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 10 }}>
                            <View>
                                <Text style={styles.cardText}>
                                    UNIT - 2
                                </Text>
                                <Text style={styles.cardText}>
                                    Ethics and Humans Interface
                                </Text>
                                <Text style={styles.cardText}>
                                    Number Of Questions : 80
                                </Text>
                                <TouchableOpacity style={styles.btn}>
                                    <Text style={styles.btnText}>Not Started</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../assets/images/unlock.png')}
                                    style={styles.statusImg}
                                />

                            </View>
                        </View>
                    </Card>
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
                                    <Text style={styles.btnText}>Locked</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../assets/images/lock.png')}
                                    style={styles.statusImg}
                                />

                            </View>
                        </View>
                    </Card>
                    <Card
                        style={styles.cardStyle}
                        elevation={10}
                        cornerRadius={10}
                        backgroundColor={UIColor.color4}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 10 }}>
                            <View>
                                <Text style={styles.cardText}>
                                    UNIT - 2
                                </Text>
                                <Text style={styles.cardText}>
                                    Ethics and Humans Interface
                                </Text>
                                <Text style={styles.cardText}>
                                    Number Of Questions : 80
                                </Text>
                                <TouchableOpacity style={styles.btn}>
                                    <Text style={styles.btnText}>Not Started</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../assets/images/unlock.png')}
                                    style={styles.statusImg}
                                />

                            </View>
                        </View>
                    </Card>
                </ScrollView>
            </View>
        </View>
    );
};

export default TestDetails;

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


        margintop: 10,
        backgroundColor: '#ffffff',
        paddingBottom: 50
    },
    scrollview: {
        margin: 16,
        marginTop: 15,

    },
    btnText: {
        color: themeGreen,
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderBottomWidth: 2,
        borderColor: 'lightgray',
        color: 'black',
    },
    btn: {
        height: 30,
        backgroundColor: secondryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 5,
        padding: 5,


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
    },
    statusImg: {
        height: 25,
        width: 25,
        tintColor: '#ffffff'

    }
});