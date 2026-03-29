import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

const rechargeOptions = [
  { name: 'Mobile', icon: '📱' },
  { name: 'DTH', icon: '📡' },
  { name: 'PlayCode', icon: '🎮' },
  { name: 'Broadband', icon: '🌐' },
  { name: 'PostPaid', icon: '📄' },
  { name: 'Gas', icon: '🔥' },
  { name: 'Water', icon: '💧' },
  { name: 'FastTag', icon: '🚗' },
];

export const Recharge = () => {

const navigation=useNavigation()
  const onPress=(name)=>{
    console.log(name)
    navigation.navigate(`${name}`,{
      name:`${name}`
    })
  }

//   const navigation = useNavigation();

// const onPress = (name) => {
//   navigation.getParent()?.navigate(name); // ✅ FIX
// };


  return (
    <View className="mx-3 mt-4 bg-white rounded-2xl p-4 shadow">
      {/* Title */}
      <Text className="text-xl ml-4 font-bold text-gray-800 mb-4">
        Recharge & Bill Payments
      </Text>

      {/* Grid */}
      <View className="flex-row flex-wrap">
        {rechargeOptions.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="w-1/4 items-center mb-5"
            activeOpacity={0.7}
            onPress={()=>onPress(item.name)}
          >
            {/* Icon */}
            <View className="bg-blue-100 w-14 h-14 rounded-full items-center justify-center mb-2">
              <Text className="text-xl">{item.icon}</Text>
            </View>

            {/* Text */}
            <Text className="text-xs text-gray-700 text-center">
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
