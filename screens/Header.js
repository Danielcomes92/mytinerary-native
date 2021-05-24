import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native';
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
                    {
                        props.userLogged
                        ? <View>
                            <ImageBackground style={styles.userImage} source={{
                                uri: props.userLogged.urlPic
                            }} />
                        </View>
                        : <Ionicons name="person-circle-outline" size={35} color="white" />
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userImage: {
        width: 30,
        height: 30,
        borderRadius: 30,
        overflow: 'hidden'
    },
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
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);