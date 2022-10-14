import { Box, HStack, Avatar, Spacer, Text, VStack } from "native-base";
import React from "react";
import { getLocalStorageObject } from "../../../data/LocalStorage";

const Suggested = ({ item }) => {
  const [suggestedState, setSuggestedState] = React.useState([]);

  React.useEffect(async () => {
    let suggestedLs = await setLocalStorageObject({
      key: `[Suggested]${user.uid}`,
    });
    suggestedLs ? setSuggestedState(suggestedLs) : console.log("no saved suggestions available");
  }, []);

  return (
    <Box
      _dark={{
        borderColor: "muted.50",
      }}
      borderColor="muted.800"
      pl={["0", "4"]}
      pr={["0", "5"]}
      py="2"
    >
      <HStack space={[2, 3]} justifyContent="space-between">
        <Avatar
          size="48px"
          source={{
            uri: item.avatarUrl,
          }}
        />
        <VStack>
          <Text
            _dark={{
              color: "warmGray.50",
            }}
            color="coolGray.800"
            bold
          >
            {item.fullName}
          </Text>
          <Text
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
          >
            {item.recentText}
          </Text>
        </VStack>
        <Spacer />
        <Text
          fontSize="xs"
          _dark={{
            color: "warmGray.50",
          }}
          color="coolGray.800"
          alignSelf="flex-start"
        >
          {item.timeStamp}
        </Text>
      </HStack>
    </Box>
  );
};

const MakePayment = () => {
  return <></>;
};

const RefundPurchase = () => {
  return <></>;
};

const CreateProduct = () => {
  return <></>;
};

export default Suggested;
