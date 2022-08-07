import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';
import Navigator from '../navigation/Navigator';
import { Box } from 'native-base';


export default function HomeScreen() {
  const { user } = useAuthentication();

  return (
    <View style={styles.container}>
<Navigator/>
<Box flex="1" bg="#EFF5F8" >

<Text> helloss  </Text>


</Box>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#EFF5F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10
  }
});
