import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Card from "../Card";

const NewsListScreen = (props) => {
  console.log(props);
  return (
    <View>
      {/* touchable opacity make our card respond to touches */}

      <Card navigation={props.navigation} />
    </View>
  );
};

export default NewsListScreen;

const styles = StyleSheet.create({});
