import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import RestaurantsStack from './RestaurantsStack'
import AccountStack from './AccountStack'
import FavoritiesStack from './FavoritiesStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import SearchStack from './SearchStack'

const Tab = createBottomTabNavigator()
export default function Navigations() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="restaurants"
                    component={RestaurantsStack}
                    options={{title: "Restaurants"}}
                />
                <Tab.Screen
                    name="favorities"
                    component={FavoritiesStack}
                    options={{title: "Favorities"}}
                />
                <Tab.Screen
                    name="topRestaurants"
                    component={TopRestaurantsStack}
                    options={{title: "Top 5"}}
                />
                <Tab.Screen
                    name="search"
                    component={SearchStack}
                    options={{title: "Search"}}
                />
                <Tab.Screen
                    name="account"
                    component={AccountStack}
                    options={{title: "Account"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
