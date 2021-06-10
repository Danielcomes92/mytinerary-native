import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

import { View, StyleSheet, Text, ImageBackground, Dimensions, ScrollView } from 'react-native';
import itinerariesActions from '../../redux/actions/itinerariesActions';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import Itinerary from '../Itineraries/Itinerary';

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
        <>
            <ScrollView style={styles.mainContainer} keyboardShouldPersistTaps={'handled'}>
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
                <View style={styles.textBottomContainer}>
                    <Text style={styles.titleBottom}>{citySelected.city}</Text>
                    <Text style={styles.textBottom}>Tours & Experiences</Text>
                </View>
                {
                    props.cityItineraries.length > 0
                    ? props.cityItineraries.map(city => {
                        return <Itinerary key={city._id} city={city} />
                    })
                    : <View style={{justifyContent: 'center', alignContent: 'center', padding: 50}}>
                        <Text style={styles.text}>No itineraries available in this city yet!</Text>
                    </View>
                }
            </ScrollView>

        </>
    )
}

const styles = StyleSheet.create({
    textBottom: {
        color: '#cccccc',
        padding: 1
    },
    titleBottom: {
        color: '#05E3F0',
        fontWeight: 'bold',
        fontSize: 32
    },
    textContainer: {
        paddingLeft: 12
    },
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
    textBottomContainer: {
        paddingLeft: 4,
        marginTop: 12
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