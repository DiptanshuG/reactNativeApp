import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS === "ios" ? "#9898ff" : "green",
    padding: 10,
    borderBottomColor: Platform.OS === "ios" ? "blue" : "#fffff",
    borderBottomWidth: 1,
  },
  title: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 20,
    color: Platform.OS === "ios" ? "blue" : "#fff",
  },
});
