import { Text } from "react-native";

const Greeting = (props) => {
  return (
    <Text>
      Hello {props.name}
    </Text>
  );
};

export default Greeting;