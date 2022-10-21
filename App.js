import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/screens/Login'
import SignUp from './src/screens/SignUp'
import ExamDetail from './src/screens/ExamDetail'
import Profile from './src/screens/Profile'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen'
import HomeTab from './src/screens/HomeTab'
import TestDetails from './src/screens/TestDetails'
import SingleTestDetails from './src/screens/SingleTestDetails'
import Result from './src/screens/Result'
import Routes from './src/navigation/Routes'
import { Provider } from 'react-redux';

import { themeGreen, secondryColor } from './src/utils/config'
import store from './src/redux/store'
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={themeGreen}

      />
      {/* <SignUp /> */}
      <Provider store={store}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </Provider>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})