import { SafeAreaView, Text } from "react-native";

// Classic Functional Component
function ClassicFunctionalComponent() {
  return (
    <SafeAreaView>
      <Text>Hello From Classic Functional Component</Text>
    </SafeAreaView>
  );
}

// Modern Functional Component
const ModernFunctionalComponent = () => {
  return (
    <SafeAreaView>
      <Text>Hello From Modern Functional Component</Text>
    </SafeAreaView>
  );
};

export {
    ClassicFunctionalComponent,
    ModernFunctionalComponent
}