import React, { Component } from "react";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import SplashScreen from "react-native-splash-screen";

import RestaurantList from "./src/screens/RestaurantList";
import RestaurantInfo from "./src/screens/RestaurantInfo";
import About from "./src/screens/About";
import AddReview from "./src/screens/AddReview";

const List = createStackNavigator(
  {
    Home: {
      screen: RestaurantList
    },
    Info: {
      screen: RestaurantInfo
    }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#0066CC",
        color: "#FFF"
      },
      headerTintColor: "#FFF",
      headerTitleStyle: {
        color: "#FFF"
      }
    }
  }
);

const Tabs = createBottomTabNavigator(
  {
    List: { screen: List },
    About: { screen: About }
  },
  {
    navigationOptions: ({ navigation }) => {
      return {
        tabBarIcon: ({ tintColor }) => {
          const route = navigation.state.routeName;
          const name = {
            List: "list",
            About: "info-circle"
          }[route];
          return <Icon name={name} color={tintColor} size={22} />;
        },
        tabBarOptions: {
          activeBackgroundColor: "#E6F0FA"
        }
      };
    }
  }
);

const ModalNav = createStackNavigator(
  {
    Tabs: { screen: Tabs },
    AddReview: { screen: AddReview }
  },
  {
    mode: "modal",
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <ModalNav />;
  }
}
