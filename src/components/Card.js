import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import * as newsAction from "../redux/actions/newsAction";

const Card = (props) => {

const dispatch=useDispatch();
  console.log(props.item.item.description,"chuha")
  return (
    <TouchableOpacity
      onPress={() => {
        // the name we set there matched with ap navigator file inside

        //  also pass object props.navigation.navigate({routeName:"NewsItem"});
        props.navigation.navigate("NewsItem");
      }}
    >
      <View style={styles.Card}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={{
              uri: props.item.item.urlToImage,
            }}
          />
        </View>
        <View style={styles.titleContainer}>
          {" "}
          <Text style={styles.title}>
            {props.item.item?.title}
          </Text>
          <MaterialIcons onPress={()=>dispatch(newsAction.toggleFav(props.item.item.url))} name="favorite-border" size={24} color="red"  />
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            { props.item.item?.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  Card: {
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    elevation: 5,
    height: 300,
    margin: 20,
  },
  imgContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  titleContainer: {
    paddingHorizontal: 10,
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  description: {
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: "Smooch-Regular",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "large",
  },
  descriptionText: {
    fontFamily: "Smooch-Regular",
    fontSize: 25,
    fontWeight: "bold",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});
