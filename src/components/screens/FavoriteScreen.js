import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import DrawerHeaderButton from "../DrawerHeaderButton";

const FavoriteScreen = () => {
  return (
    <View>
      <Text>FavoriteScreen</Text>
    </View>
  );
};
FavoriteScreen.navigationOptions = (navData) => {
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

export default FavoriteScreen;

const styles = StyleSheet.create({});
