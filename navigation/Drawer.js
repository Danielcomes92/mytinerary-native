import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { HomeStack } from './Stack'

const Drawer = createDrawerNavigator();

const MyDrawer = (props) => {
    return(
        <>
            <Drawer.Navigator>
                <Drawer.Screen name='home' component={ HomeStack } />
            </Drawer.Navigator>
        </>
    )
}

export default MyDrawer;