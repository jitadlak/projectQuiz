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
import { themeGreen } from '../utils/config';
import AccountScreen from './AccountScreen';
import ChangePassword from './ChangePassword';
import CseInfo from './CseInfo';
import UserScreen from './UserScreen';
const Tab = createMaterialTopTabNavigator();

const Profile = () => {

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
                        <Text style={styles.head1}>Account Setting</Text>

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
                <Tab.Screen name="User" component={UserScreen} />
                <Tab.Screen name="Password" component={ChangePassword} />
                <Tab.Screen name="CSE Info" component={CseInfo} />
                <Tab.Screen name="Account" component={AccountScreen} />
            </Tab.Navigator>
        </View>
    );
}
export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeGreen,
    },
    head1: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 10,
    },
    head2: {
        fontSize: 17,
        color: '#ffffff',
        marginTop: 10,
    },
})