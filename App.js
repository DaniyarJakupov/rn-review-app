import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import RestaurantList from "./src/screens/RestaurantList";
import RestaurantInfo from "./src/screens/RestaurantInfo";

export default createStackNavigator(
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
