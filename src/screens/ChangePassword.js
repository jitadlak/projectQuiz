import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { themeGreen } from '../utils/config';
import { ChangePasswordUrl } from '../utils/urls';
import { showError, showSuccess } from '../components/Snackbar';
import axios from 'axios';
import Loader from '../components/Loader';
import { useSelector, useDispatch } from 'react-redux';
const ChangePassword = () => {
    const [loading, setLoading] = useState(false);
    const [currrentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const { userData } = useSelector(state => state.auth);
    const { token } = useSelector(state => state.auth);
    console.log(token, 'token')
    const onSubmit = async () => {
        if (!currrentPassword || !newPassword || !confirmNewPassword) {
            return showError('Fields Required');
        }
        if (newPassword !== confirmNewPassword) {
            return showError('Confirm Password Not Matched');
        }
        if (newPassword.length < 8 || newPassword.length > 20) {
            return showError('Password should be min 8 char and max 20 char');
        }
        try {
            let data = {
                current_password: currrentPassword,
                new_password: newPassword,
            };

            setLoading(true);
            const res = await axios.post(`${ChangePasswordUrl}${userData.id}`, data, {
                headers: { Authorization: `Bearer ${token}` },
            });
            console.log(res, 'res');
            if (res.data.status == 200) {
                setLoading(false);
                setNewPassword('');
                setCurrentPassword('');
                setConfirmNewPassword('');
                return showSuccess('Password Changed Successfully');
            } else {
                setLoading(false);
                showError(res.data.message);
            }

            console.log(data, 'formData');
        } catch (error) {
            setLoading(false);
            console.log(error, 'res');
            return showError('Something Went Wrong !!');
        }
    };
    return (
        <View style={styles.subcontainer}>
            {loading ? (
                <Loader />
            ) : (
                <ScrollView style={styles.scrollview}>
                    <Text style={styles.labelText}>Current Password *</Text>
                    <TextInput
                        style={styles.input}
                        value={currrentPassword}
                        onChangeText={e => setCurrentPassword(e)}
                    />
                    <View style={{ height: 20 }} />
                    <Text style={styles.labelText}>New Password *</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        value={newPassword}
                        onChangeText={e => setNewPassword(e)}
                    />
                    <View style={{ height: 20 }} />
                    <Text style={styles.labelText}>Confirm New Password *</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        value={confirmNewPassword}
                        onChangeText={e => setConfirmNewPassword(e)}
                    />

                    <TouchableOpacity style={styles.btn} onPress={() => onSubmit()}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}>
                            CHANGE PASSWORD
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            )}
        </View>
    );
};

export default ChangePassword;

const styles = StyleSheet.create({
    subcontainer: {
        flex: 1,
        margintop: 10,
        // alignItems: 'center',
        // justifyContent: 'center'
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
        borderColor: themeGreen,
        color: 'black',
    },
    btn: {
        height: 50,
        backgroundColor: themeGreen,
        alignItems: 'center',
        justifyContent: 'center',

        marginTop: 25,
    },
});
