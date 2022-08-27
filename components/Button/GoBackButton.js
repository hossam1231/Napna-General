import React from "react";
import { IconButton, Icon, Fab } from "native-base";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const GoBackButtonFab = () => {
  const navigation = useNavigation();
  return (
    <Fab
      placement="bottom-right"
      colorScheme="blue"
      size="lg"
      icon={<Icon name="share" as="Entypo" />}
    />
  );
};

const GoBackButton = () => {
  return <></>;
};

export default GoBackButton;
