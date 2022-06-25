import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { HeaderButton } from "react-navigation-header-buttons";


import React from "react";

const DrawerHeaderButton = (props) => {
  return (
    <HeaderButton {...props} IconComponent={MaterialIcons} iconSize={24} />
  );
};

export default DrawerHeaderButton;

const styles = StyleSheet.create({


});
