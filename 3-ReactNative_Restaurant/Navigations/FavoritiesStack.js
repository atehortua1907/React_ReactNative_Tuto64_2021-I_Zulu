import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Favorities from '../screens/Favorities';

const Stack = createStackNavigator()

export default function FavoritiesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Favorities"
                component={Favorities}
                options={{title: "Favorities"}}
            />
        </Stack.Navigator>
    )
}
