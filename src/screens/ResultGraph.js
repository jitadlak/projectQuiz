import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { Card } from 'react-native-shadow-cards';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
} from 'react-native-chart-kit';
import { themeGreen, UIColor, windowWidth } from '../utils/config';

const ResultGraph = () => {
    const data = {
        labels: ['Your Score', 'Your Average'],
        datasets: [
            {
                data: [125, 45],
            },
        ],
    };
    const chartConfig = {
        backgroundGradientFrom: '#ffffff',
        backgroundGradientFromOpacity: 0.7,
        backgroundGradientTo: '#ffffff',
        backgroundGradientToOpacity: 0.7,
        backgroundColor: themeGreen,
        color: (opacity = 1) => `rgba(48, 96, 95, ${opacity})`,
        strokeWidth: 3, // optional, default 3
        barPercentage: 1.5,
        useShadowColorFromDataset: false, // optional
    };

    return (
        <ScrollView>
            <View>
                <BarChart
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                    data={data}
                    width={Dimensions.get('window').width}
                    height={320}
                    chartConfig={chartConfig}
                    verticalLabelRotation={0}
                    fromZero={true}
                />
            </View>
            <View>
                <Card style={styles.cardStyle} elevation={10} cornerRadius={0}>
                    <Text style={styles.cardText}>Leader Board</Text>
                    <View style={{ height: 20 }} />
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            margin: 5
                        }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.rank}>
                                <Text style={{ color: '#ffffff' }}>1</Text>
                            </View>

                            <Image
                                source={require('../assets/images/trophy.png')}
                                style={{ height: 25, width: 25 }}
                            />

                            <Image
                                source={require('../assets/images/noprofile.webp')}
                                style={{ height: 30, width: 30, borderRadius: 15 }}
                            />
                        </View>
                        <View style={{ marginLeft: 25 }}>
                            <Text style={{ fontSize: 16, color: 'black' }}>Murli Dhasoriya</Text>
                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            margin: 5
                        }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.rank}>
                                <Text style={{ color: '#ffffff' }}>2</Text>
                            </View>

                            <Image
                                source={require('../assets/images/trophy.png')}
                                style={{ height: 25, width: 25 }}
                            />

                            <Image
                                source={require('../assets/images/noprofile.webp')}
                                style={{ height: 30, width: 30, borderRadius: 15 }}
                            />
                        </View>
                        <View style={{ marginLeft: 25 }}>
                            <Text style={{ fontSize: 16, color: 'black' }}>Dhiraj Saxena</Text>
                        </View>
                    </View>


                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            margin: 5
                        }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.rank}>
                                <Text style={{ color: '#ffffff' }}>3</Text>
                            </View>

                            <Image
                                source={require('../assets/images/trophy.png')}
                                style={{ height: 25, width: 25 }}
                            />

                            <Image
                                source={require('../assets/images/noprofile.webp')}
                                style={{ height: 30, width: 30, borderRadius: 15 }}
                            />
                        </View>
                        <View style={{ marginLeft: 25 }}>
                            <Text style={{ fontSize: 16, color: 'black' }}>Akash Sharma</Text>
                        </View>
                    </View>
                </Card>
            </View>
        </ScrollView>
    );
};

export default ResultGraph;

const styles = StyleSheet.create({
    cardStyle: {
        padding: 5,
        margin: 15,
        width: '90%',
    },
    cardText: {
        fontFamily: 'arial',
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    rank: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 25,
        width: 25,
        backgroundColor: themeGreen,
        borderRadius: 20,
    },
});
