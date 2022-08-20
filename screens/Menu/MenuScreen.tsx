import React from "react";
import {
  Box,
  FlatList,
  IconButton,
  Text,
  Heading,
  Center,
  Icon,
  HStack,
  VStack,
  Divider,
  Image,
  Pressable,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function MenuScreen() {
  return <AppDrawer></AppDrawer>;
}

function AppDrawer() {
  const navigation = useNavigation();
  const icons = [
    {
      name: "bolt",
      bg: "amber.600",
      route: "Home",
    },
    {
      name: "build",
      bg: "emerald.600",
      route: "Product",
    },
    {
      name: "cloud",
      bg: "blue.600",
    },
    {
      name: "delivery-dining",
      bg: "orange.600",
    },
    {
      name: "favorite",
      bg: "rose.600",
    },
    {
      name: "music-note",
      bg: "violet.600",
    },
    {
      name: "invert-colors-on",
      bg: "lime.600",
    },
    {
      name: "navigation",
      bg: "indigo.600",
    },
    {
      name: "settings",
      bg: "pink.600",
    },
    {
      name: "sports-esports",
      bg: "coolGray.600",
    },
    {
      name: "shield",
      bg: "darkBlue.600",
    },
    {
      name: "photo-camera",
      bg: "fuchsia.600",
    },
    {
      name: "network-wifi",
      bg: "amber.500",
    },
    {
      name: "nightlight-round",
      bg: "violet.800",
    },
    {
      name: "flight",
      bg: "blue.800",
    },
    {
      name: "extension",
      bg: "indigo.600",
    },
    {
      name: "duo",
      bg: "orange.600",
    },
    {
      name: "album",
      bg: "rose.600",
    },
    {
      name: "access-alarm",
      bg: "emerald.600",
    },
    {
      name: "forum",
      bg: "indigo.600",
    },
  ];
  return (
    <FlatList
      flex="1"
      numColumns={4}
      data={icons}
      renderItem={({ item }) => {
        return (
          <>
            <IconButton
              m={"8px"}
              borderRadius="full"
              bg={item.bg}
              variant="solid"
              onPress={() => {
                navigation.navigate(item.route);
              }}
              p="3"
              icon={
                <Icon
                  color="white"
                  name={item.name}
                  as={MaterialIcons}
                  size="sm"
                />
              }
            />
            <Text>{item.name}</Text>
          </>
        );
      }}
    />
  );
}
