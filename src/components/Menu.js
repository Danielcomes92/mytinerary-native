import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, Image} from 'react-native'
import { Icon } from 'react-native-elements'


const Menu = () => {
    return (
        <View style={styles.navbar}>
            
            <View style={styles.menuItems}>
                <View>
                    <Image style={[styles.logo, styles.itemsCenter]} source={require('../img/pngegg.png')} />
                    <Text>Home</Text>
                </View>
                <View>
                    <Icon style={styles.itemsCenter} type="ionicon" name="map-outline" size={40}/>
                    <Text>Cities</Text>
                </View>
                <View>
                    <Icon type="ionicon" name="heart-outline"  size={40}/>
                    <Text>Wishlist</Text>
                </View>
                <View>
                    <Icon type="ionicon" name="person-circle-outline" size={40}/>
                    <Text>Account</Text>
                </View>
            </View>
    
        </View>
    )
}

const styles = StyleSheet.create({
    itemsCenter: {
        textAlign: 'center'
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