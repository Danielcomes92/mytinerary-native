import React from 'react'
import { View, Text, ImageBackground, StyleSheet, ScrollView} from 'react-native';
import Header from '../Header';
import BeachesCarousel from './BeachesCarousel';
import Hero from './Hero';

const Home = (props) => {
    return (
        <>
        <Header props={props}/>
        <ScrollView style={styles.bgBodyColor}>
            <Hero />
            <BeachesCarousel />
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    bgBodyColor: {
        backgroundColor: "#000115"
      }
})

export default Home;