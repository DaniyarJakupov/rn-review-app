import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList } from "react-native";

import RestaurantRow from "./src/components/RestaurantRow";

const data = [
  { name: "Angular Bistro", address: "111 Maple Str", rating: 5 },
  { name: "Vue Bar", address: "777 Park Ave", rating: 5 },
  { name: "React Cafe", address: "123 Anywhere St", rating: 5 },
  { name: "Fancy Restaurant", address: "799 Main St", rating: 5 },
  { name: "Taco Place", address: "550 Maple Rd", rating: 5 },
  { name: "Tony's Diner", address: "4101 College St", rating: 4.5 },
  { name: "Pasta Central", address: "706 Harper St", rating: 4.5 },
  { name: "Burger Builder", address: "869 Hamilton Dr", rating: 4.5 },
  { name: "Pizza Express", address: "1049 Bird St", rating: 4 },
  { name: "Teriyaki To Go", address: "1885 Tea Berry Lane", rating: 4 },
  { name: "Maroon Deli", address: "1082 Stuart St", rating: 4 },
  { name: "Prime Bar and Grill", address: "1848 Fairfax Dr", rating: 4 },
  { name: "Dumpling House", address: "747 Kelly Dr", rating: 4 },
  { name: "Hot Chicken", address: "1816 Olive St", rating: 3.5 },
  { name: "Luna's Tap Room", address: "256 Spirit Dr", rating: 3.5 },
  { name: "Quick Sandwich Shop", address: "2587 Cherry Ridge Dr", rating: 3.5 },
  { name: "Bobby's Burgers", address: "4152 Berkley St", rating: 3 },
  { name: "Turnpike Diner", address: "2571 Central Ave", rating: 3 },
  { name: "Bombay Express", address: "65 Queens Lane", rating: 3 },
  { name: "Coffee Central", address: "3228 Oakwood Circle", rating: 3 },
  { name: "King's Garden", address: "2935 Victoria Ct", rating: 2 },
  { name: "Salads and More", address: "2454 Preston St", rating: 1 }
];

export default class App extends Component {
  state = {
    search: ""
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Restaurant review:</Text>

        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={text => this.setState({ search: text })}
          value={this.state.search}
        />

        <FlatList
          data={data.filter(
            place => !this.state.search || place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
          )}
          renderItem={({ item, index }) => <RestaurantRow place={item} index={index} />}
          keyExtractor={item => item.name}
          initialNumToRender={17}
          contentContainerStyle={{ paddingTop: 30 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    padding: 40,
    color: "#0066cc"
  },
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    borderColor: "#ddd",
    borderBottomWidth: 1,
    backgroundColor: "#f5f5f5"
  }
});
