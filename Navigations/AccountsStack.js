import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'

import Account from '../pantallas/account/Account'
import Login from '../pantallas/account/Login'
import Register from '../pantallas/account/Register'


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

            <Stack.Screen
                name="register"
                component={Register}
                options={{title: "Registrar Usuario" }}
            />
        </Stack.Navigator>
        
        )
    }
    