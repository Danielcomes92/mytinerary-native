import React from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'
let ScreenHeight = Dimensions.get('window').height;

export const Preloader = () => {
    return (
        <View style={styles.preloaderContainer}>
            <Image source={require('../../assets/pngegg.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    preloaderContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000125",
        height: ScreenHeight,
        overflow: 'hidden'
    }
})
