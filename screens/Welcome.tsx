import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { NativeBaseProvider,Button, VStack, PresenceTransition, Heading, Icon, Fab, Text, Center, Box, View } from 'native-base';
import { Entypo } from '@expo/vector-icons';

const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <NativeBaseProvider>
      <Center h="100vh">
        <Box>
          <PresenceTransition visible={isOpen} initial={{
            opacity: 0
          }} animate={{
            opacity: 1,
            transition: {
              duration: 5500
            }
          }}>
            <VStack space={4}>
              <Text fontSize='4xl' fontFamily='Manrope-ExtraLight' >Napna <Text  fontFamily="Manrope-ExtraBold">KIOSK</Text></Text>
              <Text bold sub fontFamily='Manrope-ExtraBold'>FOR MERCHANTS</Text>
            </VStack>
            <Button onPress={()=>navigation.navigate('Profile')}>FRANCIS</Button>
          </PresenceTransition>
        </Box> 
        <Fab
          colorScheme="blue"
          size="lg"
          onPress={() => navigation.navigate('Sign In')}
          icon={<Entypo name="chevron-right" size={24} color="white" />}
        >
        </Fab>
      </Center>
    </NativeBaseProvider>
  );
}



export default WelcomeScreen;