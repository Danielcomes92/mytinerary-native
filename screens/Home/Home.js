import React from 'react'
import { View, Text, ImageBackground, StyleSheet, ScrollView} from 'react-native';
import Header from '../Header';

import Hero from './Hero';
import BeachesCarousel from './BeachesCarousel';
import BecameMember from './BecameMember';

const Home = (props) => {
    return (
        <>
        <Header props={props}/>
        <ScrollView style={styles.bgBodyColor}>
            <Hero />
            <BeachesCarousel />
            <BecameMember />
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