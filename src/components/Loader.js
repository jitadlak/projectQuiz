import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';
import { themeGreen } from '../utils/config'

const Loader = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: themeGreen }}>

            <Image
                source={require('../assets/images/aashram-loader.png')}
                style={{ height: 150, width: 150 }}
            />
            <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold' }}>Loading ....</Text>
            {/* <Lottie source={require('../assets/images/loader1.json')} autoPlay loop
                style={{ height: 150, width: 150 }}
            /> */}
        </View>
    )
}

export default Loader

const styles = StyleSheet.create({})