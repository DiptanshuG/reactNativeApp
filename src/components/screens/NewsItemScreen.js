import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ImageBackground } from "react-native-web";
import { MaterialIcons } from "@expo/vector-icons";
import * as newsAction from "../../redux/actions/newsAction"
import { useSelector,useDispatch } from "react-redux/es/exports";

const NewsItemScreen = (props) => {
  const dispatch=useDispatch()
  const articleUrl = props.navigation.getParam("articleUrl");
  const article = useSelector((state) =>
    state.news.articles.find((article) => article.url === articleUrl)
  );

  const isFav = useSelector((state) =>
    state.news.favorites.some((article) => article.url === articleUrl)
  );
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>{article.title} </Text>
      </View>
      <ImageBackground
        source={{ uri: article.urlToImage }}
        style={styles.image}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.author}>{article.author}</Text>
          <MaterialIcons
            name={isFav ? "favorite" : "favorite-border"}
            size={24}
            color="yellow"
            onPress={() => dispatch(newsAction.toggleFav(article.url))}
          />
        </View>
      </ImageBackground>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{article.description}</Text>
      </View>
    </View>
  );
};

export default NewsItemScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginVertical:20
  },
  heading: {
    marginHorizontal:20,
    marginBottom:10,
  },
  title: {
    fontFamily:"Smooch-Regular",
    fontSize:24,
  },
  image: {
    width:"100%",
    height:200,
    justifyContent:"flex-end",
  },
  titleContainer: {
    backgroundColor:"rgba(0,0,0,0.5)",
    paddingHorizontal:"10",
    paddingVertical:5,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  author: {
    fontFamily:"Smooch-Regular",
    fontSize:20, 
    color:"white"
  },
  description: {

  },
  descriptionText: {},
});
