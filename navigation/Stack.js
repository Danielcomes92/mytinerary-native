import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import Home from '../screens/Home/Home'

const Stack = createStackNavigator()

export const HomeStack = () => {
    return (    
        <Stack.Navigator>
            <Stack.Screen name='home' component={Home} />
        </Stack.Navigator>
    )
}