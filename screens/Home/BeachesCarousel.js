import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import ItemBeachesCarousel from './ItemBeachesCarousel'

const BeachesCarousel = () => {

    const data = [
        {
            city: 'Rio de Janeiro', url: 'https://i.imgur.com/jTVSbwS.jpg'
        },
        {
            city: 'Miami', url: 'https://i.imgur.com/CxdEMsr.jpg'
        },
        {
            city: 'Tossa Codolar', url: 'https://i.imgur.com/QBFx83c.jpg'
        },
        {
            city: 'Hvar', url: 'https://i.imgur.com/mVHre1H.jpg'
        },
        {
            city: 'Buzios', url: 'https://i.imgur.com/BTmrEkV.jpg'
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Beaches</Text>
                <Text style={styles.text}>The better options for people who appreciate the beach</Text>
            </View>
            {/* each image */}
            <ScrollView horizontal={true} style={styles.imagesContainer}>
                {
                    data.map((city, index) => {
                        return <ItemBeachesCarousel key={index} city={city} />
                    })
                }
            </ScrollView>
            
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
        width: '100%',
        height: 200,
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