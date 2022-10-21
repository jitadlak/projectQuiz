
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
import { themeGreen, secondryColor } from '../utils/config';

import QuizeSingleChoice from "react-native-react-native-quiz-single-choice";



const QuizScreen = () => {

    const data = [
        {
            number: '1',
            question:
                "Pendant la préhistoire, quelle période a suivi l’age de la pierre taillée ?",
            optionA: "l’âge de la pierre polie",
            optionB: "l’âge du fer",
            optionC: "l’âge du bronze",
            optionD: "l’âge de la pierre ponce",
            answer: "l’âge de la pierre polie",
        },
        {
            number: '2',
            question: "Une personne qui parle couramment le français est :",
            optionA: "Francilienne",
            optionB: "Francophone",
            optionC: "Tchatcheuse",
            optionD: "Francophile",
            answer: "Francophone",
        },
        {
            number: '3',
            question: "Quel petit signe place-t-on parfois sous la lettre C ?",
            optionA: "Une virgule",
            optionB: "Une cédille",
            optionC: "Une apostrophe",
            optionD: "Un petit cygne",
            answer: "Une cédille",
        },
    ];

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
                        <Text style={styles.head1}>UNIT - 1</Text>
                        <Text style={styles.head1}>UNIT DESCRIPTION </Text>
                        <Text style={styles.head2}>ETHICS AND HUMAN INTERFACE</Text>
                        <Text style={styles.head1}>CATEGORY </Text>
                        <Text style={styles.head2}>GS-IV ETHIC INTEGRITY AND APPTITUDE</Text>

                    </View>
                    <View>
                        <View style={{ height: 50, width: 50, backgroundColor: secondryColor, borderRadius: 30, margin: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/images/unlock.png')}
                                style={{ height: 30, width: 30, }}
                            />
                        </View>
                        <View style={{ padding: 5, height: 50, backgroundColor: secondryColor, borderRadius: 30, margin: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'black' }}>01/80</Text>
                        </View>
                    </View>

                </View>


            </View>
            <View style={styles.subContainer}>
                <ScrollView>
                    {/* <QuizeSingleChoice

                        containerStyle={{ backgroundColor: "#ffffff", paddingTop: 30 }}
                        questionTitleStyle={{ fontSize: 22, color: themeGreen }}
                        responseStyle={{
                            borderRadius: 15,
                        }}
                        responseTextStyle={{ fontSize: 12, fontWeight: "normal" }}
                        selectedResponseStyle={{
                            borderRadius: 15,
                            backgroundColor: secondryColor,
                        }}
                        selectedResponseTextStyle={{
                            fontSize: 14,
                            fontWeight: "normal",
                            color: themeGreen
                        }}
                        responseRequired={true}
                        nextButtonText={"Save And Next"}
                        nextButtonStyle={{ backgroundColor: themeGreen }}
                        nextButtonTextStyle={{ color: "#FFF" }}
                        prevButtonText={"Prev"}
                        prevButtonStyle={{ backgroundColor: "#fa5541" }}
                        prevButtonTextStyle={{ color: "#FFF" }}
                        endButtonText={"Done"}
                        endButtonStyle={{ backgroundColor: "#000" }}
                        endButtonTextStyle={{ color: "#FFF" }}
                        buttonsContainerStyle={{ marginTop: "auto" }}
                        onEnd={(results) => {
                            console.log(results);
                        }}

                        data={data}
                    /> */}
                    <View>
                        <View style={{

                            width: '90%',
                            backgroundColor: "#ffffff",
                            padding: 20,
                            alignSelf: 'center',
                            borderRadius: 10,

                        }}>
                            <Text
                                style={{ color: 'black', fontWeight: 'bold' }}
                            >"Ethics, Integrity And Apptitude", GS IV deals with _________________</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20, alignItems: 'center' }}>
                            <View style={{ padding: 20, width: '40%', backgroundColor: '#ffffff', borderRadius: 5 }}>
                                <Text
                                    style={{ color: 'black', fontWeight: 'bold', alignSelf: 'center' }}
                                >Ethical Values</Text>
                            </View>
                            <View style={{ padding: 20, width: '40%', backgroundColor: '#ffffff', borderRadius: 5 }}>
                                <Text
                                    style={{ color: 'black', fontWeight: 'bold', alignSelf: 'center' }}
                                >Ethical Norm</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20, alignItems: 'center' }}>
                            <View style={{ padding: 20, width: '40%', backgroundColor: '#ffffff', borderRadius: 5 }}>
                                <Text
                                    style={{ color: 'black', fontWeight: 'bold', alignSelf: 'center' }}
                                >Ethical Life</Text>
                            </View>
                            <View style={{ padding: 20, width: '40%', backgroundColor: '#ffffff', borderRadius: 5 }}>
                                <Text
                                    style={{ color: 'black', fontWeight: 'bold', alignSelf: 'center' }}
                                >Ethical Behaviour</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={styles.btn}>
                            <Text>Finish</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text>Continue Later</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>


            </View>

        </View >
    );
}
export default QuizScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeGreen,
    },
    head1: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 2,
    },
    head2: {
        fontSize: 14,
        color: '#ffffff',

    },
    subContainer: {
        height: '100%',
        backgroundColor: themeGreen
    },
    btn: {
        padding: 15,
        backgroundColor: secondryColor,
        margin: 30
    }
})