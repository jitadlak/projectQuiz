
import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTab from '../screens/HomeTab';
import TestDetails from '../screens/TestDetails';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import SingleTestDetails from '../screens/SingleTestDetails';
import Result from '../screens/Result';
import QuizScreen from '../screens/QuizScreen';


const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="TestDetails" component={TestDetails} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="SingleTestDetails" component={SingleTestDetails} />
            <Stack.Screen name="Result" component={Result} />
            <Stack.Screen name="Quiz" component={QuizScreen} />





        </Stack.Navigator>
    )
}

export default MainStack

const styles = StyleSheet.create({})