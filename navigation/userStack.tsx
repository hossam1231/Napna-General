import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import MoreModal from '../screens/MoreModal';
import CatalogScreen from '../screens/CatalogScreen';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
           <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
           <Stack.Screen name="More" component={MoreModal} options={{headerShown: false}} />
          <Stack.Screen name="Catalog" component={CatalogScreen} options={{headerShown: false}} /> 
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}