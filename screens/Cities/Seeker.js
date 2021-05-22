import React from 'react'
import { connect } from 'react-redux'

import { TextInput, View, StyleSheet } from 'react-native'
import citiesActions from '../../redux/actions/citiesActions';

const Seeker = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Find your next destination"
                onChangeText={ (e) => props.filterCities(e)}
                placeholderTextColor={'gray'}
            >
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '90%',
        height: 40,
        backgroundColor: '#ffffff',
        borderRadius: 30,
        paddingLeft: 20,
        borderWidth: 1,
        borderColor: '#cccccc',
    },
    container: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        marginTop: 30
    }
})

const mapStateToProps = state => {
    return {
        citiesUpdated: state.cityReducer.citiesUpdated,    
        noCitiesAlert: state.cityReducer.noCitiesAlert,
    }
}

const mapDispatchToProps = {
    getCities: citiesActions.getCities,
    filterCities: citiesActions.filterCities
}


export default connect(mapStateToProps, mapDispatchToProps)(Seeker);