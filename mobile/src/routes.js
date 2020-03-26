import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'

import Incident from './pages/Incidents'
import Detail from './pages/Detail'

const AppStack = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions= {{headerShown: false}}>
                <AppStack.Screen name="Incidents" component={Incident}/>
                <AppStack.Screen name="Details"  component={Detail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}