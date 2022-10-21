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
import React, { useState } from 'react';
import { themeGreen } from '../utils/config';
import PhoneInput from 'react-native-phone-number-input';
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel,
} from 'react-native-simple-radio-button';
import DatePicker from 'react-native-date-picker-select';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker'

const ExamDetail = () => {
    const [dob, setdob] = useState('');
    const [profileimageuri, setprofileimageuri] = useState('')
    var radio_props = [
        { label: 'Male', value: 0 },
        { label: 'Female', value: 1 },
        { label: 'Skip', value: 1 },
    ];

    //imagepicker

    const selectImg = async () => {
        var options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        await launchImageLibrary(options, res => {
            console.log('Response = ', res);
            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                setprofileimageuri(res.assets[0].uri)
            }
        });
    }
    //File picker

    const selectFile = async () => {
        const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.pdf],
            //There can me more options as well
            // DocumentPicker.types.allFiles
            // DocumentPicker.types.images
            // DocumentPicker.types.plainText
            // DocumentPicker.types.audio
            // DocumentPicker.types.pdf
        });
        console.log(res, 'res')
    }

    return (
        <View style={styles.container}>
            <View style={{ margin: 20 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <Image
                        source={require('../assets/images/copy.png')}
                        style={{ height: 50, width: 50, tintColor: 'white' }}
                    />
                    {/* <Text
                        style={{
                            fontSize: 20,
                            color: '#ffffff',
                            textDecorationLine: 'underline',
                        }}>
                        Sign Up{' '}
                    </Text> */}
                </View>
                <Text style={styles.head1}>Start Your Journey,</Text>
                <Text style={styles.head2}>We just want to know your exam basic details !!</Text>
            </View>
            <View style={styles.subcontainer}>
                <ScrollView style={styles.scrollview}>
                    <KeyboardAvoidingView behavior="margin">
                        <Text style={styles.labelText}>Profile Picture</Text>
                        <View style={{ height: 15 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={styles.piccontainer}>
                                {profileimageuri ? <Image
                                    source={{ uri: profileimageuri }}
                                    style={{ height: 100, width: 100 }}
                                /> : <Image
                                    source={require('../assets/images/noprofile.webp')}
                                    style={{ height: 100, width: 100 }}
                                />}
                            </View>
                            <TouchableOpacity style={{
                                height: 30, width: 100,
                                backgroundColor: 'lightgray',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 5
                            }}
                                onPress={() => selectImg()}
                            >
                                <Text style={{ color: 'black' }}>Upload Image</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 15 }} />
                        <Text style={styles.labelText}>Tentative Date Of Appearing For Exam</Text>
                        <View style={{ height: 15 }} />
                        <DatePicker
                            style={{ width: '100%' }}
                            date={dob}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="1997-05-01"
                            maxDate="2022-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0,
                                },
                                dateInput: {
                                    marginLeft: 36,
                                },
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={date => {
                                setdob(date);
                            }}
                        />
                        <View style={{ height: 15 }} />
                        <Text style={styles.labelText}>CSE Registration Number</Text>
                        <TextInput style={styles.input}
                            keyboardType={'number-pad'}
                        />
                        <View style={{ height: 15 }} />
                        <Text style={styles.labelText}>CSE Admit Card</Text>
                        <View style={{ height: 15 }} />
                        <TouchableOpacity style={{
                            height: 35, width: '100%', backgroundColor: 'lightgray', borderRadius: 5,
                            justifyContent: 'center', alignItems: 'center'
                        }}
                            onPress={() => selectFile()}
                        >
                            <Text style={{ color: 'black' }}>Upload File</Text>
                        </TouchableOpacity>
                        <View style={{ height: 15 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={styles.btn2}>
                                <Text
                                    style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}>
                                    SKIP NOW
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn}>
                                <Text
                                    style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}>
                                    SAVE
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        </View>
    );
};

export default ExamDetail;

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
        height: 550,
        margintop: 10,
        backgroundColor: '#ffffff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    scrollview: {
        margin: 30,
    },
    labelText: {
        color: 'black',
        fontSize: 17,
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
        marginTop: 15,
        width: '40%'
    },
    btn2: {
        height: 50,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 15,
        width: '40%'
    },
    socialbtn: {
        height: 50,
        borderWidth: 1,
        marginTop: 10,
        borderColor: 'gray',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    socialbtnText: {
        color: 'gray',
        fontWeight: 'bold',
    },
    piccontainer: {
        height: 100,
        width: 100,
        backgroundColor: 'gray',

    }
});
