import React from "react";
import { Spinner, Center, Heading, HStack } from "native-base";

export default function LoadingScreen() {
  return (
    <Center flex="1">
      {/* napna logo */}
      <Spin />
    </Center>
  );
}

export const Spin = () => {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="black" fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
};
