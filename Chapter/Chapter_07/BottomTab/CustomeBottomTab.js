import { View, Text, TouchableOpacity } from "react-native";

export const CustomBottomTab = (props) => {
  const { state, descriptors, navigation } = props;

  return (
    <View
      style={{
        flexDirection: "row",
        height: 60,
        borderTopWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#fff",
      }}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate(route.name);
        };

        // Emoji icons
        let icon = "❓";
        if (route.name === "Home") icon = "🏠";
        if (route.name === "Chat") icon = "💬";
        if (route.name === "Help") icon = "❓";
        if (route.name === "Setting") icon = "⚙️";

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: isFocused ? "blue" : "gray",
              }}
            >
              {icon}
            </Text>

            <Text
              style={{
                fontSize: 12,
                color: isFocused ? "blue" : "gray",
              }}
            >
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};