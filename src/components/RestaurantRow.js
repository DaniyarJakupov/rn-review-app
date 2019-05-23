import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

class RestaurantRow extends Component {
  state = {
    showInfo: false
  };

  onInfoPress = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  render() {
    const { place, index } = this.props;

    return (
      <View style={{ backgroundColor: index % 2 == 0 ? "#ffffff" : "#f3f3f3" }} key={place.name}>
        <View style={[styles.row]}>
          <View style={styles.edges}>
            <Text>{index + 1}</Text>
          </View>

          <View style={styles.nameAddress}>
            <Text style={{ color: "black", fontSize: 14 }}>{place.name}</Text>
            <Text style={{ color: "gray", fontSize: 12 }}>{place.address}</Text>
          </View>

          <View style={styles.edges}>
            <TouchableHighlight style={styles.button} onPress={this.onInfoPress} underlayColor="#5398DC">
              <Text style={styles.buttonText}>Info</Text>
            </TouchableHighlight>
          </View>
        </View>

        {this.state.showInfo && (
          <View style={styles.info}>
            <Text>Restaurant Info</Text>
          </View>
        )}
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
    padding: 5,
    minWidth: 50
  },
  nameAddress: {
    flex: 8,
    flexDirection: "column"
  },
  button: {
    borderWidth: 1,
    borderColor: "#0066CC",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#fff"
  },
  buttonText: {
    color: "#0066CC",
    fontSize: 12
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4
  }
});

export default RestaurantRow;
