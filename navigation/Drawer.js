import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { HomeStack } from './Stack';
import { CitiesStack } from './Stack';
import { Ionicons } from '@expo/vector-icons'
import { Text, View } from 'react-native';

const Drawer = createDrawerNavigator();

const MyDrawer = (props) => {
    return(
        <>  
            <Drawer.Navigator
                drawerType={'back'}
                drawerStyle={{
                    backgroundColor: '#eeeeee',
                    width: '50%'
                }}
            >
                <Drawer.Screen name='Home' component={ HomeStack } options={{
                    drawerIcon: () => ( <Ionicons name="home-sharp" size={24} color={'#000100'}/> )
                }} />
                <Drawer.Screen name='Cities' component={ CitiesStack } options={{
                    drawerIcon: () => ( <Ionicons name="location-sharp" size={24} color={'#000100'}/> )
                }} />

            </Drawer.Navigator>
        </>
    )
}

export default MyDrawer;