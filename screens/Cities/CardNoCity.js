import React from 'react'
import { View, StyleSheet, ImageBackground, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

const CardNoCity = () => {
    console.log('hola en card no city')
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../../assets/nocities.png')}>
                <View style={styles.textContainer}>
                    <Ionicons name="search" size={42} color="white" />
                    <Text style={styles.text}>Sorry, no results found!</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        width: '100%',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    text: {
        color: '#fefefe',
        fontSize: 24,
        marginLeft: 6
    },
    textContainer: {
        alignItems: 'center',
        paddingTop: 40,
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default CardNoCity;