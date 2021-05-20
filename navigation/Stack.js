import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home/Home'

const stack = createStackNavigator()

const Stack = () => {
    return (    
        <stack.Navigator>
            <stack.Screen name='home' component={Home} />
        </stack.Navigator>
    )
}

export default Stack;