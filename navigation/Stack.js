import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import Home from '../screens/Home/Home'
import Cities from '../screens/Cities/Cities'

const Stack = createStackNavigator()

export const HomeStack = () => {
    return (    
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='home' component={Home} />
        </Stack.Navigator>
    )
}

export const CitiesStack = () => {
    return (    
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='cities' component={Cities} />
        </Stack.Navigator>
    )
}