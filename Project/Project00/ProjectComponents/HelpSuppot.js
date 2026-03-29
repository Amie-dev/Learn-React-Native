import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

const supportOptions = [
  { name: "Feedback", icon: "💬" },
  { name: "WhatsApp", icon: "📱" },
  { name: "Email", icon: "📧" },
];

export const HelpSupport = () => {
  const navigation=useNavigation()
    const onPress=(name)=>{
      console.log(name)
      navigation.navigate(`${name}`,{
        name:`${name}`
      })
    }
  return (
    <View className="mx-3 mt-5 mb-4 bg-white rounded-2xl p-4 shadow-sm">

      {/* Title */}
      <Text className="text-lg font-bold text-gray-800 mb-4">
        Help & Support
      </Text>

      {/* Options */}
      <View className="flex-row">

        {supportOptions.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            className="w-1/3 items-center"
            onPress={()=>onPress(item.name)}
          >

            {/* Icon */}
            <View className="bg-blue-100 w-16 h-16 rounded-full items-center justify-center mb-2">
              <Text className="text-2xl">
                {item.icon}
              </Text>
            </View>

            {/* Label */}
            <Text className="text-xs text-gray-700 text-center">
              {item.name}
            </Text>

          </TouchableOpacity>
        ))}

      </View>

    </View>
  );
};