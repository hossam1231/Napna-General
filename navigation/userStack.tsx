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
import { getIdToken } from "firebase/auth";
import Home from "../screens/Home/Home";
import MerchantNotRegistered, {
  MerchantNotRegisteredScreen,
} from "../components/Merchant/MerchantNotRegistered";
import Demo from "../screens/Test/Demo";
import ProductScreenLayout from "../screens/Product/ProductScreen.layout";

const axios = require("axios").default;

const Stack = createStackNavigator();

export default function UserStack({ user }) {
  const [partner, setPartner] = useState();
  const [merchant, setMerchant] = useState();
  const [staff, setStaff] = useState();

  useEffect(() => {
    merchantRoleCheck();
  }, []);

  useEffect(() => {
    if (partner) {
      if (partner.merchant) {
        setMerchant(partner.merchant);
      }
      if (partner.staff) {
        setStaff(partner.staff);
      }
    }
  }, [partner]);

  async function merchantRoleCheck() {
    let APIURL =
      "http://napna.co.uk/.netlify/functions/merchantRoleCheck?token=REPLACE_TOKEN";
    const token = await getIdToken(user, true);
    APIURL = APIURL.replace("REPLACE_TOKEN", token);
    try {
      var res = await axios.get(APIURL);
      if (res == null) {
        setPartner("EMPTY");
      } else {
        setPartner(res.data);
      }
    } catch (e) {
      console.log("error merchant role check", e);
    }
  }

  if (user) {
    if (partner) {
      if (merchant || staff) {
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
              <Stack.Group
                options={{ headerShown: false }}
                screenOptions={{ presentation: "modal" }}
              >
                <Stack.Screen name="Favourite" component={MenuScreen} />
                <Stack.Screen name="Analytic" component={MenuScreen} />
                <Stack.Screen name="Profile" component={MenuScreen} />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Menu"
                  component={MenuScreen}
                />
                <Stack.Screen
                  name="UserNotFound"
                  component={UserNotFoundScreen}
                />
              </Stack.Group>
            </Stack.Navigator>
          </NavigationContainer>
        );
      } else if (partner === "EMPTY") {
        console.log("hi");
      } else {
        return (
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
              <Stack.Screen
                name="NoMerchant"
                component={MerchantNotRegistered}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        );
      }
    } else {
      return <LoadingScreen />;
    }
  } else {
    return <LoadingScreen />;
  }
}
