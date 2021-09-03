import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'




import Top from '../pantallas/Top'


const Stack = createStackNavigator()
export default function TopStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="top-5"
                component={Top}
                options={{title: ""}}
            />
        
        </Stack.Navigator>
        
    )
}
