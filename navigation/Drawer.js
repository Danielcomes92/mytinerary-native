import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { AuthStack, HomeStack, CitiesStack } from './Stack';
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
                <Drawer.Screen name='home' component={ HomeStack } options={{
                    drawerIcon: () => ( <Ionicons name="home-sharp" size={24} color={'#000100'}/> ),
                    title: 'Home'
                }} />
                
                <Drawer.Screen name='cities' component={ CitiesStack } options={{
                    drawerIcon: () => ( <Ionicons name="location-sharp" size={24} color={'#000100'}/> ),
                    title: 'Cities'
                }} />

                <Drawer.Screen name='access' component={ AuthStack } options={{
                    drawerIcon: () => ( <Ionicons name="key" size={24} color={'#000100'}/> ),
                    title: 'Access'
                }}/>
                
            </Drawer.Navigator>
        </>
    )
}

export default MyDrawer;