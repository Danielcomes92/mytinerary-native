import React from 'react'
import { ImageBackground, Text, View, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native'

const CardCity = (props) => {
    const navigation = useNavigation();
    const { city } = props
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageBackground style={styles.image} source={{
                    uri: `${city.image}`
                }} >
                </ImageBackground>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{city.city}</Text>
                <Text style={styles.text}>{city.country}</Text>
                <View style={styles.footerCard}>
                    <Text style={styles.text}>#Travel #{city.continent}</Text>
                    <Text style={styles.btn} onPress={ () => navigation.navigate('city', {id: city._id}) }>Visit now</Text>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 400,
        width: '100%',
        borderBottomWidth: 0.25,
        borderBottomColor: 'gray',
        marginBottom: 20
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        height: '65%',
        width: '100%'
    },
    textContainer: {
        height: '35%',
        width: '100%',
        padding: 14
    },
    title: {
        color: '#05E3F0',
        fontWeight: 'bold',
        fontSize: 26,

    },
    text: {
        color: '#cecece'
    },
    footerCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btn: {  
        fontWeight: 'bold',
        padding: 10,
        backgroundColor: 'white',
        color: 'black',
        width: 100,
        textAlign: 'center',
        borderRadius: 2,
        overflow: 'hidden'
    },

})

export default CardCity;