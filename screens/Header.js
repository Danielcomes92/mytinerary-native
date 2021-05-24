import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

const Header = ({props}) => {
    return (
        <View style={styles.navbar}>
            <View style={styles.innerNavbar}>
                <View>
                    <Ionicons name="menu-outline" size={35} color="white" onPress={ () => props.navigation.openDrawer() } />
                </View>
                <View>
                    <Ionicons name="person-circle-outline" size={35} color="white" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    innerNavbar: {
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    navbar: {
        width: '100%',
        height: 45,
        backgroundColor: "#000115",
        justifyContent: 'flex-end',
        paddingBottom: 2
    }
})

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);