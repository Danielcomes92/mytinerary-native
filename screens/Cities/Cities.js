import React, { useEffect } from 'react'
import { ScrollView, Text, View, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import citiesActions from '../../redux/actions/citiesActions';

import Header from '../Header';
import CardCity from './CardCity';
import Seeker from './Seeker'

const Cities = (props) => {
    useEffect(() => {
        props.getCities()
    }, [])
    
    console.log(props)
    return (
        <>
            <Header props={props}/>
            <ScrollView style={styles.bgBodyColor}>
                <Seeker />
                {
                    props.citiesUpdated.length > 0 && props.citiesUpdated.map(city => {
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
        citiesUpdated: state.cityReducer.citiesUpdated
    }
}

const mapDispatchToProps = {
    getCities: citiesActions.getCities
}


export default connect(mapStateToProps, mapDispatchToProps)(Cities);