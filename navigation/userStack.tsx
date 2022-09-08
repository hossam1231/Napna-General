import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MoreModal from "../screens/MoreModal";
import {
  CreateProductScreen,
  CreateProductI,
} from "../screens/Product/CreateProductScreen";
import { ProductScreen, ProductModal } from "../screens/Product/ProductScreen";
import UserNotFoundScreen from "../screens/UserNotFoundScreen";
import MenuScreen from "../screens/Menu/MenuScreen";
import { navigationRef } from "./Navigator";
import LoadingScreen from "../screens/Loading/loadingScreen";

import Home from "../screens/Home/Home";
import MerchantNotRegistered, {
  MerchantNotRegisteredScreen,
} from "../components/Merchant/MerchantNotRegistered";
import Demo from "../screens/Test/Demo";
import ProductScreenLayout from "../screens/Product/ProductScreen.layout";
import {
  getLocalStorageObject,
  setLocalStorageObject,
} from "../data/LocalStorage";
import { Text, Heading, Center, Button, VStack } from "native-base";
import usePartner from "../utils/hooks/usePartner";
import { UserContext } from "../context/UserContext";

const axios = require("axios").default;
const Stack = createStackNavigator();

export default function UserStack({ user }) {
  const [partner, setPartner] = usePartner();
  const [userContext, setUserContext] = React.useContext(UserContext);

  React.useEffect(() => {
    setUserContext(user);
  }, [user]);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="demo"
          component={Demo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="More"
          component={MoreModal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateProduct"
          component={CreateProductScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateProductI"
          component={CreateProductI}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Product"
          component={ProductScreenLayout}
          options={{ headerShown: false }}
        />
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="Favourite" component={MenuScreen} />
          <Stack.Screen name="Analytic" component={MenuScreen} />
          <Stack.Screen name="Profile" component={MenuScreen} />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Menu"
            component={MenuScreen}
          />
          <Stack.Screen name="UserNotFound" component={UserNotFoundScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
