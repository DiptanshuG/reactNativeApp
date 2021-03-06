import { StyleSheet, Text, View } from "react-native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { loadAsync } from "expo-font";
import react, { useState } from "react";
import AppNavigator from "./src/components/navigation/AppNavigator";
import store from "./src/redux/store";
import { Provider } from "react-redux";

const loadFont = () => {
  return Font.loadAsync({
    "Smooch-Regular": require("./assets/fonts/Smooch-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFont}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store} >
  <AppNavigator/>
    </Provider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffFFFf",
  },
});
