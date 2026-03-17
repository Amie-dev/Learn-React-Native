import { Text, View, TouchableOpacity } from "react-native";

export const CustomDrawer = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 20,
      }}
    >
      {/* Header */}
      <View style={{ marginBottom: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          My App
        </Text>
      </View>

      {/* Menu Items */}

      <TouchableOpacity
        style={{ marginVertical: 10 }}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Text style={{ fontSize: 16 }}>🏠 Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginVertical: 10 }}
        onPress={() => props.navigation.navigate("Chat")}
      >
        <Text style={{ fontSize: 16 }}>💬 Chat</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginVertical: 10 }}
        onPress={() => props.navigation.navigate("Help")}
      >
        <Text style={{ fontSize: 16 }}>❓ Help</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginVertical: 10 }}
        onPress={() => props.navigation.navigate("Setting")}
      >
        <Text style={{ fontSize: 16 }}>⚙️ Setting</Text>
      </TouchableOpacity>
    </View>
  );
};