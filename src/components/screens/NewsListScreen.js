import { StyleSheet, FlatList } from "react-native";
import React, { useEffect } from "react";
import Card from "../Card";
import { useDispatch, useSelector } from "react-redux";
import DrawerHeaderButton from "../DrawerHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import * as newsAction from "../../redux/actions/newsAction";

const NewsListScreen = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsAction.fetchArticles());
  }, [dispatch]);

  const articles = useSelector((state) => state.news.articles);
  console.log(articles, "bhai");

  return (
    // <View>
    //   {/* touchable opacity make our card respond to touches */}

    //   <Card navigation={props.navigation} />
    // </View>
    <FlatList
      data={articles || []}
      keyExtractor={(item) => item?.url}
      renderItem={(item) => (
        <Card
          navigation={props.navigation}
       item={item}
       url={item.url}
        />
      )}
    />
  );
};
NewsListScreen.navigationOptions = (navData) => {
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

export default NewsListScreen;

const styles = StyleSheet.create({});
