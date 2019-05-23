import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class RestaurantRow extends Component {
  state = {};
  render() {
    const { place, index } = this.props;

    return (
      <View key={place.name} style={[styles.row, { backgroundColor: index % 2 == 0 ? "#ffffff" : "#f3f3f3" }]}>
        <View style={styles.edges}>
          <Text>{index + 1}</Text>
        </View>

        <View style={styles.nameAddress}>
          <Text style={{ color: "black", fontSize: 14 }}>{place.name}</Text>
          <Text style={{ color: "gray", fontSize: 12 }}>{place.address}</Text>
        </View>

        <View style={styles.edges}>
          <Text>info</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  edges: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5
  },
  nameAddress: {
    flex: 8,
    flexDirection: "column"
  }
});

export default RestaurantRow;
