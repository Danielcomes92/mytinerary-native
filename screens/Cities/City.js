import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

import { View, StyleSheet, Text, ImageBackground, Dimensions } from 'react-native';
import itinerariesActions from '../../redux/actions/itinerariesActions';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;

const City = (props) => {
    const navigation = useNavigation();
    const [citySelected, setCitySelected] = useState({})
    
    const filterCity = () => {
        setCitySelected(props.cities.find(city => city._id === props.route.params.id))
    }

    useEffect(() => {
        filterCity()
        props.getCityItineraries(props.route.params.id)
        redirect()
        return () => {
            props.removeItineraries()
        }
    }, [])

    const redirect = () => {
        if(props.cities.length === 0) {
            () => navigation.navigate('cities')
        }
        return null
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.upperContainer}>
                <View>
                    <Ionicons name="chevron-back" size={32} color="white" onPress={ () => navigation.navigate('cities')} />
                </View>
                <View style={styles.upperTitleContainer}>
                    <Text style={styles.upperTitle}>{citySelected.country}</Text>
                    <Text style={styles.text}>{citySelected.continent}</Text>
                </View>
                <View></View>
            </View>
            <ImageBackground style={styles.image} source={{
                uri: `${citySelected.image}`
            }}>
            </ImageBackground>
            <View>
                <Text style={styles.textImage}>{citySelected.city}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        minHeight: windowHeight,
        width: '100%',
        backgroundColor: '#000115'
    },
    text: {
        color: 'white'
    },
    image: {
        height: 275,
        width: '100%'
    },
    upperContainer: {
        width: '90%',
        height: 75,
        paddingTop: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        padding: 6,
        alignItems: 'center'
    },
    textImage: {
        color: 'white',
        fontWeight: 'bold',
        padding: 12,
        fontSize: 34
    },
    upperTitle: {
        color: '#fefefe',
        fontWeight: 'bold',
        fontSize: 20
    },
    upperTitleContainer: {
        alignItems: 'center'
    }
})


const mapStateToProps = state => {
    return {
        cities: state.cityReducer.cities,
        cityItineraries: state.itineraryReducer.cityItineraries
    }
}

const mapDispatchToProps = {
    getCityItineraries: itinerariesActions.getCityItineraries,
    removeItineraries: itinerariesActions.removeItineraries
}
 


export default connect(mapStateToProps, mapDispatchToProps)(City);