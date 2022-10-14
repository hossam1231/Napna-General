import HomeScreenLayout from "./HomeScreen.layout";
import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, useWindowDimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const App = () => {
  // Fetch the available window height to make it work on web, and native.
  // On web we could also use `100vh`, but that won't work on native.
  const { height: windowHeight } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        // Set the maximum height of the FlatList's ScrollView.
        // see: https://github.com/necolas/react-native-web/issues/1592#issuecomment-905970879
        style={{ height: windowHeight }}
        onScroll={(event) => {
          console.log("scroll");
        }}
      >
        <HomeScreenLayout />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
