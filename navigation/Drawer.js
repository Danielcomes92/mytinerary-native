import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

const drawer = createDrawerNavigator();

const Drawer = () => {
    return(
        <drawer.Navigator>
            <drawer.Screen />
        </drawer.Navigator>
    )
}

export default Drawer;