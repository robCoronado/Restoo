import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'

import Account from '../pantallas/account/Account'
import Login from '../pantallas/account/Login'


const Stack = createStackNavigator()
export default function AccountsStack() {
    return (
        <Stack.Navigator>
        
            <Stack.Screen
                name="account"
                component={Account}
                options={{title: "" }}
            />


        <Stack.Screen
                name="login"
                component={Login}
                options={{title: "Iniciar Sesión" }}
            />
        </Stack.Navigator>
        
        )
    }
    