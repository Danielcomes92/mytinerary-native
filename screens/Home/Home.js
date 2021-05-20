import React from 'react'
import { View, Text, ImageBackground, StyleSheet, ScrollView} from 'react-native';
import Hero from './Hero';

const Home = () => {
    return (
        <ScrollView style={styles.bgBodyColor}>
            <Hero />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    bgBodyColor: {
        backgroundColor: "#000115"
      }
})

export default Home;