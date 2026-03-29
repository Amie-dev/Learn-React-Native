import React, { useEffect, useRef } from "react";
import { View, Text, Image, Animated, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const banners = [
  { type: "text", value: "Big Offer" },
  { type: "text", value: "Mega Sale" },
  { type: "image", value: "https://picsum.photos/400/200?1" }
];

export const Banner = () => {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: -width * banners.length,
        duration: 6000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <View
      style={{
        height: 200,
        overflow: "hidden",
        margin: 5,
        borderRadius: 12,
        backgroundColor: "white",
      }}
      className="mx-3"
    >
      <Animated.View
        style={{
          flexDirection: "row",
          transform: [{ translateX }],
        }}
      >
        {banners.map((item, index) => (
          <View
            key={index}
            style={{
              width: width,
              height: 200,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#3b82f6",
            }}
          >
            {item.type === "text" ? (
              <Text
                style={{
                  fontSize: 26,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {item.value}
              </Text>
            ) : (
              <Image
                source={{ uri: item.value }}
                style={{ width: width, height: 150 }}
                resizeMode="cover"
              />
            )}
          </View>
        ))}
      </Animated.View>
    </View>
  );
};