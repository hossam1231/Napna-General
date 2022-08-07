import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MoreModal from '../screens/MoreModal';
import CatalogScreen from '../screens/CatalogScreen';
import UserNotFoundScreen from '../screens/UserNotFoundScreen';
import MenuScreen from '../screens/MenuScreen';
import {Box, Text, Image,FlatList, Heading, HStack,Pressable} from "native-base";
import Navigator from './Navigator'
import { navigationRef } from './Navigator';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer ref={navigationRef} >

<Stack.Navigator >
     <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
     <Stack.Screen name="More" component={MoreModal} options={{headerShown: false}} />
    <Stack.Screen name="Catalog" component={CatalogScreen} options={{headerShown: false}} />
    <Stack.Group options={{headerShown: false}} screenOptions={{ presentation: 'modal' }}>
       <Stack.Screen name="Menu" component={MenuScreen} />
       <Stack.Screen name="UserNotFound" component={UserNotFoundScreen} />
     </Stack.Group>
</Stack.Navigator>
    </NavigationContainer>
  );
}
