// import React from "react";
// import ProductScreenLayout from "./ProductScreen.layout";

// export const ProductScreen = () => {
//   return <ProductScreenLayout></ProductScreenLayout>;
// };

// export const ProductModal = () => {
//   // each product
//   return <></>;
// };

import React, { useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import {
  NativeBaseProvider,
  Box,
  Text,
  Pressable,
  Heading,
  IconButton,
  Icon,
  ScrollView,
  HStack,
  Avatar,
  VStack,
  Button,
  Spacer,
  Center,
} from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
import { MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";
import ProductScreenLayout from "./ProductScreen.layout";
import { useNavigation } from "@react-navigation/native";

export const ProductScreen = () => {
  const navigation = useNavigation();
  return (
    <VStack flex="1" space={5}>
      <Box bg="#FFFFFF" borderRadius="5" rounded="md" flex="2" w="100%">
        <HStack w="100%" justifyContent="space-between">
          <Box space={2} justifyContent="space-between">
            <VStack>
              <Text fontSize="xl" fontFamily="Manrope-Regular" color="#28234A">
                25
              </Text>
              <Text color="#7E7B93" fontFamily="Manrope-Bold" fontSize="xs">
                Popular
              </Text>
            </VStack>
            <HStack w="100%">
              <Button onPress={() => navigation.navigate("CreateProduct")}>
                Add Products
              </Button>
              <Button>...</Button>
            </HStack>
          </Box>
          <Box>{/* icon */}</Box>
        </HStack>

        <VStack>
          <HStack>
            <Text>Products</Text>
            <Button>See all</Button>
          </HStack>
        </VStack>
      </Box>

      <Text>Product Screen</Text>
      <Text>Product Screen</Text>
      <Text>Product Screen</Text>
      <Text>Product Screen</Text>
      <Text>Product Screen</Text>
      <Center h="5vh" pb="5vh" w="100%">
        <Button>Edit Feed</Button>
      </Center>
    </VStack>
  );
};

export const ProductModal = () => {
  // each product
  return <></>;
};

export default ProductScreen;
