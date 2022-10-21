import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { themeGreen, secondryColor } from '../utils/config';
import ResultData from './ResultData';
import ResultGraph from './ResultGraph';

const Tab = createMaterialTopTabNavigator();

const Result = () => {

    return (
        <View style={styles.container}>
            <View style={{ margin: 20, marginTop: 0 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>

                    <View>
                        <Text style={styles.head1}>UNIT - 1</Text>
                        <Text style={styles.head1}>UNIT DESCRIPTION </Text>
                        <Text style={styles.head2}>ETHICS AND HUMAN INTERFACE</Text>
                        <Text style={styles.head1}>CATEGORY </Text>
                        <Text style={styles.head2}>GS-IV ETHIC INTEGRITY AND APPTITUDE</Text>

                    </View>
                    <View>
                        <View style={{ height: 50, width: 50, backgroundColor: secondryColor, borderRadius: 30, margin: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/images/unlock.png')}
                                style={{ height: 30, width: 30, }}
                            />
                        </View>
                        <View style={{ padding: 5, height: 50, backgroundColor: secondryColor, borderRadius: 30, margin: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'black' }}>870/870</Text>
                        </View>
                    </View>

                </View>

            </View>
            <Tab.Navigator

                screenOptions={{

                    tabBarLabelStyle: {
                        textTransform: 'uppercase',
                        fontWeight: 'bold',

                    },
                    tabBarActiveTintColor: themeGreen,
                    tabBarInactiveTintColor: 'black',

                    tabBarIndicatorStyle: {
                        backgroundColor: themeGreen,
                        height: '6%',
                    }
                }}


            >
                <Tab.Screen name=" Record" component={ResultData} />
                <Tab.Screen name=" Graph " component={ResultGraph} />

            </Tab.Navigator>
        </View >
    );
}
export default Result;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeGreen,
    },
    head1: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 2,
    },
    head2: {
        fontSize: 14,
        color: '#ffffff',

    },
})