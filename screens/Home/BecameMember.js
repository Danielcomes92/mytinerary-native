import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { View, StyleSheet, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

const BecameMember = (props) => {
    const navigation = useNavigation();

    const goTo = props.userLogged ? 'cities' : 'access'
    return (
        <View style={styles.container}>
            <View style={[styles.contentContainer, styles.textContainer]}>
                
                <Text style={[styles.text, styles.title]}>{props.userLogged ? 'Member registered' : 'Became a Member'}</Text>
                <Text style={styles.text}>{ props.userLogged ? 'As a member registered, you can share your experiences with other members of our community, lets go to cities and find out the latest news!' : 'Connect with other travellers or share your experience with them and be part of our travel community!'}</Text>
                <TouchableWithoutFeedback onPress={ () => navigation.navigate(goTo)}>
                    <Text style={[styles.text, styles.btn]}>{props.userLogged ? 'Cities' : 'Register'}</Text>
                </TouchableWithoutFeedback>

            </View>
            <View style={[styles.contentContainer, styles.imageContainer]}>
                <ImageBackground style={styles.image} source={{
                    uri: 'https://i.imgur.com/xJY0hYd.jpg'
                }}></ImageBackground>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 400,
        width: '100%',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    contentContainer: {
        height: '50%',
        width: '90%',
        alignItems: 'center',
        backgroundColor: '#e7f3ff'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    textContainer: {
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        padding: 20,
        borderBottomWidth: 0.4,
        borderBottomColor: 'black'
    },
    imageContainer: {
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        overflow: 'hidden'
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'black'
    },
    btn: {
        width: 100,
        padding: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 4,
        marginTop: 20,
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold'
    },
    text: {
        color: 'black',
        textAlign: 'center',
        marginTop: 5,
        width: '80%'
    }
})

const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged
    }
}
export default connect(mapStateToProps)(BecameMember);
