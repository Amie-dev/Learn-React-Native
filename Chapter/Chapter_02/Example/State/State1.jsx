import React, { Component } from "react";
import { SafeAreaView, Text, Button } from "react-native";

class Counter extends Component {

  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <SafeAreaView>
        <Text>Count: {this.state.count}</Text>

        <Button
          title="Increase"
          onPress={this.increase}
        />
      </SafeAreaView>
    );
  }
}

export default Counter;