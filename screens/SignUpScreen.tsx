import React, { useEffect, useState } from 'react';
import { Center, Text, Slide, Alert, Heading, View, VStack, Link, HStack, Button, Box, FormControl, Input, Icon } from 'native-base';
import { StackScreenProps } from '@react-navigation/stack';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { createIconSetFromFontello } from '@expo/vector-icons';
import { streamlineError } from '../compute';

const auth = getAuth();

const SignUpScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const [isOpenTop, setIsOpenTop] = React.useState(false);
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    confirmedPassword: '',
    error: ''
  })
  const [confirmedPassword, setConfirmedPassword] = useState()
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

  function signUpCheck() {
    // setIsOpenTop(!isOpenTop)
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory'
      })
      setIsOpenTop(!isOpenTop)
    } else
      if (value.confirmedPassword != value.password) {
        setValue({ ...value, error: 'Passwords do not match' })
        setIsOpenTop(!isOpenTop)
      } else {
        signUp()
      }
  }

  async function signUp() {
    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate('Sign In');
    } catch (error) {
      setValue({
        ...value,
        error: streamlineError(String(error.message
        ),'firebase'),
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
    <Box safeArea p="2" w="90%" maxW="290" py="8">
      <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
        Welcome
      </Heading>
      <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
        Sign up to continue!
      </Heading>
      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input value={value.email}
            onChangeText={(text) => setValue({ ...value, email: text })}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input value={value.password}
            onChangeText={(text) => setValue({ ...value, password: text })}
            secureTextEntry={true}
            type="password" />
        </FormControl>
        <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input onChangeText={(text) => setValue({ ...value, confirmedPassword: text })} type="password" />
        </FormControl>
        <HStack mt="6" justifyContent="center">
          <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
            Already have a account?{" "}
          </Text>
          <Link
          onPress={()=>navigation.navigate('Sign In')}
          _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
            Sign In
          </Link>
        </HStack>
        <Button
          onPress={signUpCheck}
          mt="2" colorScheme="indigo">
          Sign up
        </Button>
      </VStack>
    </Box>
  </Center>;
}

export default SignUpScreen;