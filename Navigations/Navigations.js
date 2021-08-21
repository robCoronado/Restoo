import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import{ createBottomTabNavigator} from '@react-navigation/bottom-tabs'



import RestaurantsStack from './RestaurantsStack'
import FavoriteStack from './FavoriteStack'
import TopStack from './TopStack'
import SearchStack from './SearchStack'
import AccountsStack from './AccountsStack'

const Tab = createBottomTabNavigator()

export default function Navigations() {
    return (
        
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name="restaurants"
                    component={RestaurantsStack}
                    options={{title: "Restaurantes"}}
                />
                <Tab.Screen 
                    name="favorites"
                    component={FavoriteStack}
                    options={{title: "Favoritos"}}
                />
                <Tab.Screen 
                    name="top-5"
                    component={TopStack}
                    options={{title: "Top-5"}}
                />
                <Tab.Screen 
                    name="search"
                    component={SearchStack}
                    options={{title: "Buscar"}}
                />
                <Tab.Screen 
                    name="account"
                    component={AccountsStack}
                    options={{title: "Cuenta"}}
                />

            </Tab.Navigator>

        </NavigationContainer>



    )
}
