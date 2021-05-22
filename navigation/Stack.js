import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'

import Home from '../screens/Home/Home'
import Cities from '../screens/Cities/Cities'
import City from '../screens/Cities/City'

const Stack = createStackNavigator()

export const HomeStack = () => {
    return (    
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='home' component={Home} options={{
                title: 'Home'
            }} />
        </Stack.Navigator>
    )
}

export const CitiesStack = () => {
    return (    
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='cities' component={Cities} options={{
                title: 'Cities'
            }} />
            <Stack.Screen name='city' component={City}/>
        </Stack.Navigator>
    )
}