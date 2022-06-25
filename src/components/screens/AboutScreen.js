import { StyleSheet, Text, View } from "react-native";
import React from "react";

import DrawerHeaderButton from "../DrawerHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AboutScreen</Text>
    </View>
  );
};
AboutScreen.navigationOptions = (navData) => {
  return {
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={DrawerHeaderButton}>
          <Item
            title="Menu"
            iconName="menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
