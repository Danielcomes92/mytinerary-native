import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Home from '../screens/Home/Home'

const bottom = createBottomTabNavigator()

const Bottom = (props) => {
    return (
        <bottom.Navigator>
            <bottom.Screen name='home' component={Home} option={{
                title: 'Home'
            }} />
        </bottom.Navigator>
    )
}

export default Bottom;
