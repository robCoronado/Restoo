import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'

import Restaurants from '../pantallas/restaurants/Restaurants'
import AddRestaurant from '../pantallas/restaurants/AddRestaurant'
import AddReviewRestaurant from '../pantallas/restaurants/AddReviewRestaurant'
import Restaurantss from '../pantallas/restaurants/Restaurantss'

const Stack = createStackNavigator()
export default function RestaurantsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="restaurantss"
                component={Restaurantss}
                options={{ title: "Lista de Restaurantes"}}
            />
        
        <Stack.Screen
                name="add-restaurant"
                component={AddRestaurant}
                options={{ title: "Crear Restaurante" }}
            />
            <Stack.Screen
                name="restaurant"
                component={Restaurants}
                
            />
            <Stack.Screen
                name="add-review-restaurant"
                component={AddReviewRestaurant}
                options={{ title: "Nuevo Comentario" }}
            />
        </Stack.Navigator>
        
    )
}
