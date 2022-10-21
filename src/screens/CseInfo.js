import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Platform, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Card } from 'react-native-shadow-cards';
import { themeGreen, UIColor, windowWidth } from '../utils/config';
import ImageView from "react-native-image-viewing";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useSelector, useDispatch } from 'react-redux'
import { AdmitCardUrl, ChangeAdmitCardUrl } from '../utils/urls';
import { showError, showSuccess } from '../components/Snackbar';
import axios from 'axios';
const CseInfo = () => {
    const { userData } = useSelector(state => state.auth);
    const { token } = useSelector(state => state.auth);
    const [profileimageuri, setprofileimageuri] = useState('')
    const [visible, setIsVisible] = useState(false);
    const [AdmitCardName, setAdmitCardName] = useState('');
    const images = [
        {
            uri: profileimageuri ? profileimageuri : `${AdmitCardUrl}${userData.admit_card}`,
        },

    ];


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
                showError('Image Not Selected');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                setprofileimageuri(res.assets[0].uri)
                setAdmitCardName(res.assets[0].fileName)
            }
        });
    }
    const onSubmit = async () => {
        // if(!profileimageuri){
        //     showError()
        // }
        const data = new FormData();
        data.append('admit_card', {
            name: AdmitCardName,
            fileName: 'image',
            type: 'image/png',
            uri: Platform.OS === 'android' ? profileimageuri : profileimageuri.replace('file://', ''),
        });

        try {
            // setLoading(true)
            const res = await axios.post(`${ChangeAdmitCardUrl}${userData.id}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Authorization": `Bearer ${token}`

                },
            }
            )
            console.log(res, 'res')
            if (res.data.status == 200) {
                // setLoading(false)
                showSuccess(res.data.message)
                // return navigation.navigate("Login")
            }
            else {
                //setLoading(false)
                return showError(res.data.message)
            }
            //  console.log(data, 'formData')
        } catch (error) {
            // setLoading(false)
            console.log(error, 'res')
            // return showError('Something Went Wrong !!')
        }
    }
    return (
        <View style={{ margin: 17, }}>
            <ScrollView>
                <Text style={styles.labelText}>CSE ADMIT CARD</Text>
                <View style={{ height: 15 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={styles.piccontainer}>
                        <TouchableOpacity onPress={() => setIsVisible(true)}>
                            {profileimageuri ? <Image
                                source={{ uri: profileimageuri }}
                                style={{ height: 200, width: 150 }}
                            /> : <Image
                                source={{ uri: `${AdmitCardUrl}${userData?.admit_card}` }}
                                style={{ height: 200, width: 150 }}
                            />}
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btn}
                            onPress={() => selectImg()}
                        >
                            <Text style={{ color: '#ffffff' }}>Choose</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}
                            onPress={() => onSubmit()}
                        >
                            <Text style={{ color: '#ffffff' }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Card
                        style={styles.cardStyle}
                        elevation={10}
                        cornerRadius={0}
                    >
                        <Text style={styles.cardText}>
                            CSE EXAM DATE
                        </Text>
                        <TextInput
                            style={styles.textinput}
                            value={userData?.date_of_appearing}
                            editable={false}
                        />
                    </Card>
                    <Card
                        style={styles.cardStyle}
                        elevation={10}
                        cornerRadius={0}
                    >
                        <Text style={styles.cardText}>
                            CSE REG. NO
                        </Text>
                        <TextInput
                            style={styles.textinput}
                            value={userData?.registration_number}
                            editable={false}
                        />
                    </Card>
                    <TouchableOpacity style={styles.btn2} >
                        <Text
                            style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}
                        >SAVE</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
            <ImageView
                images={images}
                imageIndex={0}
                visible={visible}
                onRequestClose={() => setIsVisible(false)}
            />
        </View>
    )
}

export default CseInfo

const styles = StyleSheet.create({
    piccontainer: {
        height: 200,
        width: 150,
        backgroundColor: 'gray',

    },
    labelText: {
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold',
    },
    cardStyle: {
        padding: 5,
        margin: 5,
        // width: '95%',
        flexDirection: 'row', alignItems: 'center',
        marginLeft: 2,
        // justifyContent: 'center'


    },
    cardText: {
        fontFamily: 'arial',
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
        width: 120,
    },
    subText: {
        fontFamily: 'arial',
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 5
    },
    btn: {
        height: 30, width: 100,
        backgroundColor: themeGreen,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 5
    },
    btn2: {
        height: 50,
        backgroundColor: themeGreen,
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius: 10,
        marginTop: 25
    },
    textinput: {
        height: 40,
        backgroundColor: 'lightgray',
        width: '60%',
        marginLeft: 8,
        fontSize: 14,
        color: themeGreen,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
})