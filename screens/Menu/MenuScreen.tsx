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
  Fab,
  Hidden,
} from "native-base";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import GoBackButtonFab from "../../components/Button/GoBackButton";
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
      route: "demo",
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
    <>
      <Center flex="1" p="10">
        <Hidden from="sm" till="md">
          <Fab
            placement="top-right"
            m="10"
            label={
              <Text fontFamily="Manrope-ExtraBold" color="white">
                close
              </Text>
            }
            onPress={() => {
              navigation.goBack();
            }}
            colorScheme="blue"
            size="lg"
            icon={<FontAwesome name="close" size={24} color="white" />}
          />
        </Hidden>

        <FlatList
          flex="1"
          numColumns={4}
          data={icons}
          renderItem={({ item }) => {
            return (
              <Center size="xl" alignItems="center" p="5">
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
                <Text>{item.route}</Text>
              </Center>
            );
          }}
        />
      </Center>
    </>
  );
}
