import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import NewsItemScreen from "../screens/NewsItemScreen";
import NewsListScreen from "../screens/NewsListScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import AboutScreen from "../screens/AboutScreen";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

const FavoritesNavigator = createStackNavigator({
  Favorites: {
    screen: FavoriteScreen,
  },
});
const AboutNavigator = createStackNavigator({
  About: {
    screen: AboutScreen,
  },
});

const StackNavigator = createStackNavigator({
  News: {
    screen: NewsListScreen,
  },
  NewsItem: {
    screen: NewsItemScreen,
    navigationOptions: {
      headerTitle: "News Details",
    },
  },
});
const BottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: StackNavigator,
    navigationOptions: {
      tabBarIcon: () => <MaterialIcons name="home" size={24} />,
    },
  },
  Favourite: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: () => <MaterialIcons name="favorite" size={24} />,
    },
  },
});
const drawerNavigator = createDrawerNavigator({
  News: {
    screen: BottomTabNavigator,
  },
  About: {
    screen: AboutNavigator,
  },
});

export default createAppContainer(drawerNavigator);
