import React, { useState } from "react";
import {
  Box,
  Input,
  VStack,
  IconButton,
  Button,
  HStack,
  ScrollView,
  Avatar,
  Badge,
  Text,
  Heading,
  Icon,
  Center,
  Divider,
} from "native-base";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import ProductScreen from "./ProductScreen";
import { useNavigation } from "@react-navigation/native";

function Example() {
  const [showBottomNavigation, setShowBottomNavigation] = useState(false);
  return (
    <VStack
      space={5}
      _dark={{
        bg: "coolGray.800",
      }}
      _light={{
        bg: "white",
      }}
      flex="1"
      safeAreaTop
      w="100%"
    >
      <TopBar />
      <SearchBar />
      <ProductNavigation />
      <ScrollView flex="1" showsVerticalScrollIndicator={false}>
        <ProductScreen />
      </ScrollView>
      {showBottomNavigation && (
        <Center h="5vh" w="100%" position="absolute" bottom="0">
          <Button>Home</Button>
        </Center>
      )}
    </VStack>
  );
}

function SearchBar() {
  return (
    <VStack
      px="2"
      space={5}
      w="100%"
      divider={
        <Box px="2">
          <Divider />
        </Box>
      }
    >
      <VStack w="100%" space={5} alignSelf="center">
        <Input
          placeholder="Search"
          variant="filled"
          width="100%"
          borderRadius="10"
          bg="#EDEEF2"
          color={"#2D284E"}
          py="1"
          px="2"
          borderWidth="0"
          InputLeftElement={
            <Icon
              ml="2"
              size="4"
              color="gray.400"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
      </VStack>
    </VStack>
  );
}

function ProductNavigation() {
  return (
    <>
      <HStack m="2" space={2} w="100%">
        <Badge colorScheme="success">
          <Text>Success</Text>
        </Badge>
        <Badge colorScheme="success">
          <Text>Success</Text>
        </Badge>
        <Badge colorScheme="success">
          <Text>Success</Text>
        </Badge>
        <Badge colorScheme="success">
          <Text>Success</Text>
        </Badge>
      </HStack>
    </>
  );
}

const TopBar = () => {
  const navigation = useNavigation();
  return (
    <HStack alignItems="center" mt="2" justifyContent="space-between">
      <Box ml="2">
        <Avatar
          size="sm"
          bg="indigo.500"
          source={{
            uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        >
          JB
        </Avatar>
      </Box>
      <HStack>
        <IconButton
          onPress={() => navigation.navigate("Analytic")}
          icon={
            <Icon
              as={AntDesign}
              size="6"
              name="piechart"
              color="black"
              _dark={{
                color: "warmGray.50",
              }}
            />
          }
        />{" "}
        <IconButton
          onPress={() => navigation.navigate("Favourite")}
          icon={
            <Icon
              as={AntDesign}
              size="6"
              name="star"
              color="black"
              _dark={{
                color: "warmGray.50",
              }}
            />
          }
        />
        <IconButton
          onPress={() => navigation.navigate("Notification")}
          icon={
            <Icon
              as={MaterialCommunityIcons}
              size="6"
              name="bell"
              color="black"
              _dark={{
                color: "warmGray.50",
              }}
            />
          }
        />
      </HStack>
    </HStack>
  );
};

const ProductScreenLayout = () => {
  return (
    <Box flex="1" bg="#EFF5F8">
      <Example />
    </Box>
  );
};

export default ProductScreenLayout;
