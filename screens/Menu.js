import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, Image} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 




const Menu = () => {
    return (

        <></>
        // <View style={styles.navbar}>
        //         <Image style={[styles.logo]} source={require('../assets/pngegg.png')} />
            
        //     <View style={styles.menuItems}>
        //         <View style={styles.center}>
        //             <Ionicons name="ios-home" size={30} color="black" />
        //             <Text>Home</Text>
        //         </View>
        //         <View style={styles.center}>
        //             <Ionicons name="map" size={30} color="black" />
        //             <Text>Cities</Text>
        //         </View>
        //         <View style={styles.center}>
        //             <Ionicons name="heart" size={30} color="black" />
        //             <Text>Wishlist</Text>
        //         </View>
        //         <View style={styles.center}>
        //             <Ionicons name="person" size={30} color="black" />
        //             <Text>Account</Text>
        //         </View>
        //     </View>
    
        // </View>
    )
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center'
    },
    logo: {
        width: 40,
        height: 40
    },
    navbar: {
        backgroundColor: 'white',
        height: 65,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'gray'
    },
    menuItems: {
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bold: {
        fontWeight: 'bold'
    },
    logoText: {
        color: 'white',
        fontSize: 30
    }
});

export default Menu;