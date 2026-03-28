import React, { useReducer } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };

    case "DEC":
      return { count: state.count - 1 };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

export const UseReducerScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
      <Text>Count: {state.count}</Text>

      <TouchableOpacity onPress={() => dispatch({ type: "INC" })}>
        <Text>Increase</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dispatch({ type: "DEC" })}>
        <Text>Decrease</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dispatch({ type: "RESET" })}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};