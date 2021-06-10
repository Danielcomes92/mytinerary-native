import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { ImageBackground, StatusBar, TouchableWithoutFeedback } from 'react-native'
import { View, StyleSheet, Text } from 'react-native'

const Hero = () => {
    const navigation = useNavigation();
    return (
        <>
        <ImageBackground style={[styles.heroBg]} source={require('../../assets/bg-home-native.png')}>
            <View>
                <View style={styles.heroTextContainer}>
                    <Text style={styles.title}>Find your</Text>
                    <Text style={styles.title}>Perfect Trip,</Text>
                    <Text>Designed by insiders, who know and love their cities</Text>
                    <TouchableWithoutFeedback onPress={ () => navigation.navigate('cities') }>
                        <Text style={[styles.btn, styles.btnExplore]} >
                            Explore
                        </Text>
                    </TouchableWithoutFeedback >
                </View>
            </View>
        </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    btnExplore: {
        backgroundColor: 'black',
        color: 'white',
        width: 100,
        textAlign: 'center',
        borderRadius: 2,
        overflow: 'hidden',
        marginTop: 20
    },
    btn: { 
        fontWeight: 'bold',
        padding: 10
    },
    heroTextContainer: {
        padding: 24
    },
    title: {
        fontWeight: 'bold',
        fontSize: 32,
        color: '#000130'
    },
    heroBg: {
        width: '100%',
        height: 500
    }
})

export default Hero;