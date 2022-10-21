import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Profile from './Profile';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { themeGreen, UIColor, windowWidth } from '../utils/config';
const Tab = createBottomTabNavigator();
const HomeTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, tabBarLabelStyle: { fontSize: 15, color: 'orange', fontWeight: 'bold', },
            tabBarStyle: {
                height: 60,
                borderTopRightRadius: 20,
                paddingTop: 5,
                backgroundColor: themeGreen,
                borderTopLeftRadius: 20,
                margin: 5,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20

            },

        }}>
            <Tab.Screen name="HOME" component={HomeScreen}
                options={{

                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('../assets/images/home.png')}
                            style={{ height: 30, width: 30, tintColor: '#ffffff' }}
                        />
                    ),
                }}

            />
            <Tab.Screen name="PROFILE" component={Profile}
                options={{

                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('../assets/images/user.png')}
                            style={{ height: 30, width: 30, tintColor: '#ffffff' }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeTab

const styles = StyleSheet.create({})