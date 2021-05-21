import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import ItemBeachesCarousel from './ItemBeachesCarousel'

const BeachesCarousel = () => {

    const data = [
        {
            city: 'Rio de Janeiro', url: 'https://imgur.com/jTVSbwS'
        },
        {
            city: 'Miami', url: 'https://imgur.com/CxdEMsr'
        },
        {
            city: 'Tossa Codolar', url: 'https://imgur.com/QBFx83c'
        },
        {
            city: 'Hvar', url: 'https://imgur.com/mVHre1H'
        },
        {
            city: 'Buzios', url: 'https://imgur.com/BTmrEkV'
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Beaches</Text>
                <Text style={styles.text}>The better options for people who appreciate the beach</Text>
            </View>
            {/* each image */}
            <View style={styles.imagesContainer}>
                {
                    data.map((city, index) => {
                        return <ItemBeachesCarousel key={index} city={city} />
                    })
                }
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: 300
    },
    textContainer: {
        padding: 24
    },
    imagesContainer: {
        height: 200,
        backgroundColor: 'white',
        margin: 24,
        marginTop: 0
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white'
    },
    text: {
        color: 'white'
    }
})

export default BeachesCarousel;