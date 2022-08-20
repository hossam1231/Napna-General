import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";
import MoreModal from "../screens/MoreModal";
import CatalogScreen from "../screens/CatalogScreen";
import UserNotFoundScreen from "../screens/UserNotFoundScreen";
import MenuScreen from "../screens/MenuScreen";
import {
  Box,
  Text,
  Image,
  FlatList,
  Heading,
  HStack,
  Pressable,
} from "native-base";
import Navigator from "./Navigator";
import { navigationRef } from "./Navigator";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import LoadingScreen from "../screens/loading/loadingScreen";
import { getIdToken } from "firebase/auth";
import Home from "../screens/Home/Home";

const axios = require("axios").default;

const Stack = createStackNavigator();

export default function UserStack({ user }) {
  const [merchant, setMerchant] = useState(false);

  useEffect(() => {
    merchantRoleCheck();
  }, []);

  useEffect(() => {
    console.log("merchant", merchant);
  }, [merchant]);

  async function merchantRoleCheck() {
    let APIURL =
      "http://napna.co.uk/.netlify/functions/merchantRoleCheck?token=REPLACE_TOKEN";
    const token = await getIdToken(user, true);
    APIURL = APIURL.replace("REPLACE_TOKEN", token);
    try {
      var res = await axios.get(APIURL);
      setMerchant(res.data);
    } catch (e) {
      console.log("error merchant role check", e);
    }
  }

  if (user) {
    if (merchant) {
      return (
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="More"
              component={MoreModal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Catalog"
              component={CatalogScreen}
              options={{ headerShown: false }}
            />
            <Stack.Group
              options={{ headerShown: false }}
              screenOptions={{ presentation: "modal" }}
            >
              <Stack.Screen name="Menu" component={MenuScreen} />
              <Stack.Screen
                name="UserNotFound"
                component={UserNotFoundScreen}
              />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return <LoadingScreen />;
    }
  } else {
    return <LoadingScreen />;
  }
}
