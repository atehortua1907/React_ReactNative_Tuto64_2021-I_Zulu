import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Restaurants from '../screens/Restaurants'
import Favorities from '../screens/Favorities'
import TopRestaurants from '../screens/TopRestaurants'
import Search from '../screens/Search'
import Account from '../screens/Account'

const Tab = createBottomTabNavigator()
export default function Navigations() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="restaurants"
                    component={Restaurants}
                    options={{title: "Restaurants"}}
                />
                <Tab.Screen
                    name="favorities"
                    component={Favorities}
                    options={{title: "Favorities"}}
                />
                <Tab.Screen
                    name="topRestaurants"
                    component={TopRestaurants}
                    options={{title: "Top 5"}}
                />
                <Tab.Screen
                    name="search"
                    component={Search}
                    options={{title: "Search"}}
                />
                <Tab.Screen
                    name="account"
                    component={Account}
                    options={{title: "Account"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
