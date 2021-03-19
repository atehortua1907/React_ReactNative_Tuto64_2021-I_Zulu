import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements';

import RestaurantsStack from './RestaurantsStack'
import AccountStack from './AccountStack'
import FavoritiesStack from './FavoritiesStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import SearchStack from './SearchStack'

const Tab = createBottomTabNavigator()
export default function Navigations() {

    const screenOptions = (route, color) =>{
        let iconName;
        switch (route.name) {
            case "restaurants":
                iconName = "compass-outline";
                break;
            case "favorities":
                iconName = "heart-outline";
                break;
            case "topRestaurants":
                iconName = "star-outline";
                break;            
            case "search":
                iconName = "magnify";
                break;
            case "account":
                iconName = "home-outline";
                break;
        }

        return (
            <Icon
                type="material-community"
                name={iconName}
                size={22}
                color={color}
            />
        )
    };

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="search"
                tabBarOptions={{
                    inactiveTintColor: "#a17dc3",
                    activeTintColor: "#442484"
                }}
                screenOptions={({route})=>({
                    tabBarIcon:({color}) => screenOptions(route, color)
                })}
            >
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
