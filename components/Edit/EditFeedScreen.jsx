import { Heading, VStack, Text } from "native-base";
import React from "react";
const EditFeedScreen = () => {
  return (
    <VStack space={5}>
      <Heading>Edit Feed</Heading>
      <Text>
        Personalise your feed by adding or removing widgets. Drag to reorder and
        make truly it yours
      </Text>
      <VStack>
        {/* loop dependign on resoiuce */}
        <HStack>
          <Box>{/* remove button */}</Box>

          <Text>Cashback</Text>
          <Box>{/* reorder button */}</Box>
        </HStack>
      </VStack>
      <Center>
        <Button>Done</Button>
      </Center>
    </VStack>
  );
};

export default EditFeedScreen;
