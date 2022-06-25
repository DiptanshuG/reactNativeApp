import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import NewsItemScreen from "../screens/NewsItemScreen";
import NewsListScreen from "../screens/NewsListScreen";

const AppNavigator = createStackNavigator({
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

export default createAppContainer(AppNavigator);
