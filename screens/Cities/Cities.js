import React, { useEffect } from 'react'
import { ScrollView, Text, View, StyleSheet, StatusBar } from 'react-native';

import { connect } from 'react-redux';
import citiesActions from '../../redux/actions/citiesActions';

import Header from '../Header';
import CardCity from './CardCity';
import CardNoCity from './CardNoCity';
import Seeker from './Seeker'

const Cities = (props) => {

    useEffect(() => {
        props.getCities()
    }, [])

    return (
        <>
            <Header props={props}/>
            <ScrollView style={styles.bgBodyColor}>
                <Seeker />
                {
                    props.noCitiesAlert
                    ? <CardNoCity />
                    : props.citiesUpdated.map(city => {
                        return <CardCity key={city._id} city={city} />
                    })
                }
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    bgBodyColor: {
        flex: 1,
        backgroundColor: "#000115"
      }
})

const mapStateToProps = state => {
    return {
        citiesUpdated: state.cityReducer.citiesUpdated,
        noCitiesAlert: state.cityReducer.noCitiesAlert,
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    getCities: citiesActions.getCities
}


export default connect(mapStateToProps, mapDispatchToProps)(Cities);