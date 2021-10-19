import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import{ createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'



import RestaurantsStack from './RestaurantsStack'
import FavoriteStack from './FavoriteStack'
import TopStack from './TopStack'
import SearchStack from './SearchStack'
import AccountsStack from './AccountsStack'


const Tab = createBottomTabNavigator()

export default function Navigations() {
    const screenOptions = (route, color) => {
        let iconName
            switch (route.name) {
                case "restaurants":
                    iconName = "compass-outline"                    
                    break;
            
                case "favorites":
                    iconName = "heart-outline"                    
                    break;
            
                case "top-5":
                    iconName = "star-outline"                    
                    break;
            
                case "search":
                    iconName = "magnify"                    
                    break;
            
                case "account":
                    iconName = "home-outline"                    
                    break;
            
               
            }
            return (
                <Icon
                     type="material-community"
                     name={iconName}
                     size={20}
                     color={color}
                
                />

            )
  
    }
    return (
        
        <NavigationContainer>
            <Tab.Navigator
               initialRouteName="restaurantss"
            
               
               screenOptions={({ route }) => ({
                   tabBarIcon:({ color }) => screenOptions (route, color),
                   tabBarActiveTintColor: "#26abe0",
                   tabBarInactiveTintColor: "#6c348c",
                   tabBarStyle:[{display: "flex"}, null]
               })}
                
                
            >
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
                    options={{title: "Top-10"}}
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
