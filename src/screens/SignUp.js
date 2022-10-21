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
import { themeGreen, secondryColor } from '../utils/config';
import PhoneInput from 'react-native-phone-number-input';
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel,
} from 'react-native-simple-radio-button';
import DatePicker from 'react-native-date-picker-select';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { showError, showSuccess } from '../components/Snackbar';
import axios from 'axios';
import { SignUpUrl } from '../utils/urls';
import Loader from '../components/Loader';


const SignUp = ({ navigation }) => {
    const [profileimageuri, setprofileimageuri] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [UserName, setUserName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [DOB, setDOB] = useState('');
    const [Phone, setPhone] = useState(null);
    const [Gender, setGender] = useState('Male');
    const [DateOfAppearing, setDateOfAppearing] = useState('');
    const [RegistrationNumber, setRegistrationNumber] = useState(null);
    const [AdmitCardUri, setAdmitCardUri] = useState('');
    const [loading, setLoading] = useState(false);
    const [profileimagename, setprofileimagename] = useState('');
    const [AdmitCardName, setAdmitCardName] = useState('');


    var radio_props = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Skip', value: 'Skip' },
    ];
    var options = {
        title: 'Select Image',
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };
    const selectImg = async () => {
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
                setprofileimageuri(res.assets[0].uri);
                setprofileimagename(res.assets[0].fileName)
            }
        });
    };

    const selectAdmitCard = async () => {
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
                setAdmitCardUri(res.assets[0].uri);
                setAdmitCardName(res.assets[0].fileName)
            }
        });
    };

    const onsubmit = async () => {
        let data1 = {
            FirstName,
            LastName,
            UserName,
            Email,
            Password,
            ConfirmPassword,
            DOB,
            Phone,
            Gender,
            profileimageuri,
            DateOfAppearing,
            RegistrationNumber,
            AdmitCardUri
        }
        console.log(data1, 'data1')
        if (!FirstName || !LastName || !Email || !Password || !ConfirmPassword || !DOB || !Phone || !Gender || !profileimageuri || !DateOfAppearing || !RegistrationNumber || !AdmitCardUri) {
            return showError("All Fields Are Required")
        }
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(Email) === false) {
            showError("Invalid Email Format");

            return false;
        }
        const data = new FormData();
        data.append('first_name', FirstName);
        data.append('last_name', LastName);
        data.append('username', UserName);
        data.append('email', Email);
        data.append('password', Password);
        data.append('dob', DOB);
        data.append('gender', Gender);
        data.append('phone', Phone);
        data.append('date_of_appearing', DateOfAppearing);
        data.append('registration_number', RegistrationNumber);

        data.append('image', {
            name: profileimagename,
            fileName: 'image',
            type: 'image/png',
            uri: Platform.OS === 'android' ? profileimageuri : profileimageuri.replace('file://', ''),
        });
        data.append('admit_card', {
            name: AdmitCardName,
            fileName: 'image',
            type: 'image/png',
            uri: Platform.OS === 'android' ? AdmitCardUri : AdmitCardUri.replace('file://', ''),
        });
        try {
            setLoading(true)
            const res = await axios.post(SignUpUrl, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',

                },
            }
            )
            console.log(res, 'res')
            if (res.data.status == 200) {
                setLoading(false)
                showSuccess(res.data.message)
                return navigation.navigate("Login")
            }
            else {
                setLoading(false)
                return showError(res.data.message)
            }
            // console.log(data, 'formData')
        } catch (error) {
            setLoading(false)
            console.log(error, 'res')
            return showError('Something Went Wrong !!')
        }
    }
    return (
        <View style={styles.container}>
            {loading ? <Loader /> :
                <ScrollView>
                    <View style={{ margin: 20 }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Image
                                source={require('../assets/images/ias-aashram-logo.jpg')}
                                style={{ height: 100, width: 100, borderRadius: 50 }}
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
                        <Text style={styles.head1}>WANT TO ACHIEVE
                            THE GOAL ?</Text>
                        <Text style={styles.head2}>Sign up to continue ...</Text>
                    </View>
                    <View style={styles.subcontainer}>
                        <ScrollView style={styles.scrollview}>
                            <KeyboardAvoidingView behavior="margin">
                                <Text style={styles.labelText}>First Name</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={e => setFirstName(e)}
                                />

                                <View style={{ height: 15 }} />
                                <Text style={styles.labelText}>Last Name</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={e => setLastName(e)}
                                />

                                <View style={{ height: 15 }} />
                                <Text style={styles.labelText}>User Name</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={e => setUserName(e)}
                                />
                                <View style={{ height: 15 }} />
                                <Text style={styles.labelText}>Email Address</Text>
                                <TextInput style={styles.input} onChangeText={e => setEmail(e)} />
                                <View style={{ height: 15 }} />
                                <Text style={styles.labelText}>Password</Text>
                                <TextInput
                                    style={styles.input}
                                    secureTextEntry
                                    onChangeText={e => setPassword(e)}
                                />
                                <View style={{ height: 15 }} />
                                <Text style={styles.labelText}>Confirm Password</Text>
                                <TextInput
                                    style={styles.input}
                                    secureTextEntry
                                    onChangeText={e => setConfirmPassword(e)}
                                />
                                <View style={{ height: 15 }} />
                                <Text style={styles.labelText}>Date of Birth</Text>

                                <View style={{ height: 10 }} />
                                <DatePicker
                                    style={{ width: '100%' }}
                                    date={DOB}
                                    mode="date"
                                    placeholder="Select DOB"
                                    format="DD-MM-YYYY"
                                    minDate="01-01-1980"
                                    maxDate="01-01-2006"
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
                                            borderColor: themeGreen
                                        },
                                        // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={date => {
                                        setDOB(date);
                                    }}
                                />

                                <View style={{ height: 15 }} />
                                <Text style={styles.labelText}>Phone No.</Text>

                                <PhoneInput
                                    defaultValue={''}
                                    defaultCode="DM"
                                    layout="first"
                                    // onChangeText={text => {
                                    //     console.log(text);
                                    // }}
                                    onChangeFormattedText={text => {
                                        setPhone(text);
                                    }}
                                    withDarkTheme

                                    containerStyle={{ width: '100%', }}
                                />
                                <View style={{ height: 15 }} />
                                <Text style={styles.labelText}>Gender</Text>
                                <View style={{ height: 15 }} />
                                <RadioForm
                                    radio_props={radio_props}
                                    initial={0}
                                    onPress={value => setGender(value)}
                                    formHorizontal={true}
                                    buttonColor={themeGreen}
                                    selectedButtonColor={themeGreen}
                                    labelStyle={{ marginRight: 6 }}
                                />
                                <View style={{ height: 15 }} />
                                <Text style={styles.labelText}>Profile Picture</Text>
                                <View style={{ height: 15 }} />
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}>
                                    <View style={styles.piccontainer}>
                                        {profileimageuri ? (
                                            <Image
                                                source={{ uri: profileimageuri }}
                                                style={{ height: 100, width: 100 }}
                                            />
                                        ) : (
                                            <Image
                                                source={require('../assets/images/noprofile.webp')}
                                                style={{ height: 100, width: 100 }}
                                            />
                                        )}
                                    </View>
                                    <TouchableOpacity
                                        style={{
                                            height: 30,
                                            width: 100,
                                            backgroundColor: secondryColor,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 5,
                                        }}
                                        onPress={() => selectImg()}>
                                        {profileimageuri ? (
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={{ color: 'black' }}>Selected</Text>
                                                <Image
                                                    source={require('../assets/images/check-mark.png')}
                                                    style={{ height: 15, width: 15 }}
                                                />
                                            </View>
                                        ) : (
                                            <Text style={{ color: 'black' }}>Upload Image</Text>
                                        )}
                                    </TouchableOpacity>
                                </View>
                                <View style={{ height: 15 }} />
                                <Text style={styles.labelText}>
                                    Tentative Date Of Appearing For Exam
                                </Text>
                                <View style={{ height: 15 }} />
                                <DatePicker
                                    style={{ width: '100%' }}
                                    date={DateOfAppearing}
                                    mode="date"
                                    placeholder="Select Exam Date"
                                    format="DD-MM-YYYY"
                                    minDate="01-01-2022"
                                    maxDate="01-01-2025"
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
                                            borderColor: themeGreen
                                        },
                                        // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={date => {
                                        setDateOfAppearing(date);
                                    }}
                                />
                                <View style={{ height: 15 }} />
                                <Text style={styles.labelText}>CSE Registration Number</Text>
                                <TextInput
                                    style={styles.input}
                                    keyboardType={'number-pad'}
                                    onChangeText={e => setRegistrationNumber(e)}
                                />
                                <View style={{ height: 15 }} />
                                <Text style={styles.labelText}>CSE Admit Card</Text>
                                <View style={{ height: 15 }} />
                                <TouchableOpacity
                                    style={{
                                        height: 35,
                                        width: '100%',
                                        backgroundColor: secondryColor,
                                        borderRadius: 5,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    onPress={() => selectAdmitCard()}>
                                    {AdmitCardUri ? (
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ color: 'black' }}>Selected</Text>
                                            <Image
                                                source={require('../assets/images/check-mark.png')}
                                                style={{ height: 15, width: 15 }}
                                            />
                                        </View>
                                    ) : (
                                        <Text style={{ color: 'black' }}>Upload </Text>
                                    )}
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.btn} onPress={() => onsubmit()}>
                                    <Text
                                        style={{ fontSize: 20, fontWeight: 'bold', color: secondryColor }}>
                                        SIGN UP
                                    </Text>
                                </TouchableOpacity>
                            </KeyboardAvoidingView>
                        </ScrollView>
                    </View>
                </ScrollView>
            }
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeGreen,
    },
    head1: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 10,
    },
    head2: {
        fontSize: 16,
        color: '#ffffff',
        marginTop: 10,
    },
    subcontainer: {
        // height: 550,
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
        fontSize: 15,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderBottomWidth: 2,
        borderColor: themeGreen,
        color: themeGreen,
        fontWeight: 'bold',
        fontSize: 16
    },
    btn: {
        height: 50,
        backgroundColor: themeGreen,
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius: 10,
        marginTop: 25,
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
});
