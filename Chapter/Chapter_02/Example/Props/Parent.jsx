import { SafeAreaView } from "react-native";
import Greeting from "./Child";

export default function App() {
  return (
    <SafeAreaView>
      <Greeting name="Aminul" />
      <Greeting name="Rahul" />
      <Greeting name="Sara" />
    </SafeAreaView>
  );
}