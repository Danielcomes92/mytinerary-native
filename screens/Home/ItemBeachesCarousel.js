import React from 'react'
import { ImageBackground, View, StyleSheet, Text } from 'react-native'

const ItemBeachesCarousel = ({city}) => {
    console.log(city.city)
    return (
        <View>
            <View style={styles.container}>
                <ImageBackground style={styles.image} source={{
                    uri: city.url
                }}></ImageBackground>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.texto}>{city.city}</Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    textContainer: {
        width: '100%',
        height: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: 250,
        height: 175,
        marginRight: 10
    },
    texto: {
        color: 'white',
        fontSize: 20
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default ItemBeachesCarousel;
