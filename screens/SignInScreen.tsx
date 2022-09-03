import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Center, Text, Slide,Alert,Heading, View, VStack, Link, HStack, Button, Box, FormControl, Input, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { streamlineError } from '../functionsLocal';

// {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}



const auth = getAuth();

const SignInScreen = () => {
const navigation = useNavigation();
const [isOpenTop, setIsOpenTop] = React.useState(false);
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: ''
  })
  const str = `${isOpenTop ? value.error : ""}`;

  React.useEffect(() => {
    if (value.error) {
      setTimeout(() => {
        
        
        setValue({
          ...value,
          error: ""
        })
        setIsOpenTop(!isOpenTop) 
      }, 3000);
    }
  }, [isOpenTop])

  async function signIn() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      setIsOpenTop(!isOpenTop)

      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: streamlineError(error.message,'firebase'),
        
      })
      setIsOpenTop(!isOpenTop)

    }
  }

  return <Center w="100%">
     <Slide in={isOpenTop} placement="top">
      <Alert justifyContent="center" status="error" safeAreaTop={8}>
        <Alert.Icon />
        <Text color="error.600" fontWeight="medium">
          {str}
        </Text>
      </Alert>
    </Slide>
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
        Welcome
      </Heading>
      <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
        Sign in to continue!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email ID</FormControl.Label>
          <Input   
            value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
         />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input  
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry={true}
         type="password" />
          <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
            Forget Password?
          </Link>
        </FormControl>
        <Button onPress={signIn} mt="2" colorScheme="indigo">
          Sign in
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
            I'm a new user.{" "}
          </Text>
          <Link
          onPress={()=>navigation.navigate('Sign Up')}
          _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
            Sign Up
          </Link>
        </HStack>
      </VStack>
    </Box>
  </Center>;
};

export default SignInScreen;