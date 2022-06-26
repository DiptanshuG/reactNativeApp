import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import DrawerHeaderButton from "../DrawerHeaderButton";
import { useSelector } from "react-redux/es/exports";
import Card from "../Card";

const FavoriteScreen = (props) => {
  const favorite = useSelector((state) => state.news.favorites);
  console.log(favorite, "bhaiaa");
  return (
    <FlatList
      data={favorite || []}
      keyExtractor={(item) => item?.url}
      renderItem={(item) => (
        <Card navigation={props.navigation} item={item} url={item.url} />
      )}
    />
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
