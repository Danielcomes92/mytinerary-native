import React from 'react'
import { StyleSheet, ScrollView } from 'react-native';
import Header from '../Header';

import Hero from './Hero';
import BeachesCarousel from './BeachesCarousel';
import BecameMember from './BecameMember';
import { connect } from 'react-redux';

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

const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {

}

const styles = StyleSheet.create({
    bgBodyColor: {
        backgroundColor: "#000115"
      }
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);