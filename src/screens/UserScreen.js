import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Card } from 'react-native-shadow-cards';
import { themeGreen, UIColor, windowWidth, secondryColor } from '../utils/config';
import { useSelector, useDispatch } from 'react-redux'
import { UserImgUrl } from '../utils/urls';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { showError } from '../components/Snackbar';
const UserScreen = () => {
    const [profileimageuri, setprofileimageuri] = useState('')
    const [editable, setEditable] = useState(false)
    const { userData } = useSelector(state => state.auth);

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
            }
        });
    }
    return (
        <View style={{ margin: 17 }}>
            <ScrollView>
                <Text style={styles.labelText}>Profile Picture</Text>
                <View style={{ height: 15 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={styles.piccontainer}>
                        {profileimageuri ? <Image
                            source={{ uri: profileimageuri }}
                            style={{ height: 100, width: 100 }}
                        /> : <Image
                            source={{ uri: `${UserImgUrl}${userData.image}` }}
                            style={{ height: 100, width: 100 }}
                        />}
                    </View>
                    <View>
                        <TouchableOpacity style={{
                            height: 30, width: 100,
                            backgroundColor: themeGreen,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 5
                        }}
                            onPress={() => selectImg()}
                        >
                            <Text style={{ color: '#ffffff' }}>Change Image</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            height: 30, width: 100,
                            backgroundColor: themeGreen,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 5,
                            marginTop: 5
                        }}
                            onPress={() => setEditable(true)}
                        >
                            <Text style={{ color: '#ffffff' }}>Edit Details</Text>
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
                            EMAIL
                        </Text>
                        <TextInput
                            style={styles.textinput}
                            value={userData?.email}
                            editable={editable}
                            autoFocus
                        // autoCapitalize={"characters"}
                        />

                    </Card>
                    <Card
                        style={styles.cardStyle}
                        elevation={10}
                        cornerRadius={0}
                    >
                        <Text style={styles.cardText}>
                            FULL NAME
                        </Text>
                        <TextInput
                            style={styles.textinput}
                            value={`${userData?.first_name} ${userData?.last_name}`}
                            editable={editable}
                        />
                    </Card>
                    <Card
                        style={styles.cardStyle}
                        elevation={10}
                        cornerRadius={0}
                    >
                        <Text style={styles.cardText}>
                            USER ID
                        </Text>
                        <TextInput
                            style={styles.textinput}
                            value='78978797'
                            editable={editable}
                        />
                    </Card>
                    <Card
                        style={styles.cardStyle}
                        elevation={10}
                        cornerRadius={0}
                    >
                        <Text style={styles.cardText}>
                            DOB
                        </Text>
                        <TextInput
                            style={styles.textinput}
                            value={userData?.dob}
                            editable={editable}
                        />
                    </Card>
                    <Card
                        style={styles.cardStyle}
                        elevation={10}
                        cornerRadius={0}
                    >
                        <Text style={styles.cardText}>
                            PHONE
                        </Text>
                        <TextInput
                            style={styles.textinput}
                            value={userData?.phone}
                            editable={editable}
                        />
                    </Card>
                    <Card
                        style={styles.cardStyle1}
                        elevation={10}
                        cornerRadius={0}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.cardText}>
                                PURCHASES
                            </Text>
                            <Image
                                source={require('../assets/images/check-mark.png')}
                                style={{ height: 20, width: 20, marginLeft: 10 }}
                            />
                        </View>
                        <Text style={styles.subText}>* UNIT - 1</Text>
                        <Text style={styles.subText}>* UNIT - 4</Text>
                        <Text style={styles.subText}>* UNIT - 6</Text>
                    </Card>
                </View>
                {editable ? <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Save</Text>
                </TouchableOpacity> : null}
            </ScrollView>
        </View>
    )
}

export default UserScreen

const styles = StyleSheet.create({
    piccontainer: {
        height: 100,
        width: 100,
        backgroundColor: 'gray',
        marginBottom: 5

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
    cardStyle1: {
        padding: 5,
        margin: 5,
        // width: '95%',
        // flexDirection: 'row', alignItems: 'center',
        marginLeft: 2,
        justifyContent: 'center'


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
    textinput: {
        height: 40,
        backgroundColor: 'lightgray',
        width: '60%',
        marginLeft: 5,
        fontSize: 14,
        color: themeGreen,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    btn: {

        width: '100%',
        backgroundColor: themeGreen,
        alignSelf: 'center',
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    btnText: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold'
    }
})