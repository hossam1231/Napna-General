import React, { Children } from "react";
import HomeScreen from "./HomeScreen";
import { StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import {
  Box,
  useDisclose,
  IconButton,
  Stagger,
  HStack,
  Heading,
  VStack,
  Button,
  Text,
  Icon,
  Center,
  NativeBaseProvider,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ActionNativeBaseModal from "../../components/Action/ActionNativeBaseModal";
import HomeBottomSheet from "../../components/Home/HomeBottomSheet";
import { useAuthentication } from "../../utils/hooks/useAuthentication";
import { UserContext } from "../../context/UserContext";

const HomeScreenLayout = ({ isOpen, onToggle }) => {
  const [userContext, setUserContext] = React.useContext(UserContext);
  const navigation = useNavigation();
  return (
    <VStack flex="1" p="10" bg="#EFF5F8" space="5">
      {/* <YourMerchants /> */}
      <HStack justifyContent="space-between">
        <Box>
          <IconButton
            variant="solid"
            borderRadius="full"
            size="lg"
            bg="cyan.400"
            onPress={() => navigation.navigate("Menu")}
            icon={
              <Icon
                as={MaterialCommunityIcons}
                size="6"
                name="dots-horizontal"
                color="warmGray.50"
                _dark={{
                  color: "warmGray.50",
                }}
              />
            }
          />
        </Box>

        <HStack space="2">
          <ActionNativeBaseModal />
        </HStack>
      </HStack>
      <VStack space="2" py="5">
        <Heading fontSize={["4xl"]} color="#2D284E">
          Hello there {userContext.email}
        </Heading>
        <Text fontSize={["md"]} fontFamily="Manrope-Light" color="#28234A">
          Here is some information we gathered about your store
        </Text>
      </VStack>

      <HomeScreen />

      <HomeBottomSheet />
    </VStack>
  );
};

export default HomeScreenLayout;
