import React from 'react'
import { View, StyleSheet, Text, ImageBackground } from 'react-native';

const BecameMember = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Became a Member</Text>
                <Text>Connect with other travellers or share your experience with them!</Text>
                <Text>Register</Text>
            </View>
            <ImageBackground></ImageBackground>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default BecameMember;