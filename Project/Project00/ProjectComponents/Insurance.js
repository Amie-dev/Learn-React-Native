import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

const insuranceOptions = [
  { name: 'Health', icon: '🏥' },
  { name: 'Bike', icon: '🏍️' },
  { name: 'Car', icon: '🚗' },
];

export const Insurance = () => {
  const navigation=useNavigation()
    const onPress=(name)=>{
      console.log(name)
      navigation.navigate(`${name}`,{
        name:`${name}`
      })
    }
  return (
    <View className="mx-3 mt-4 bg-white rounded-2xl p-4 shadow">
      {/* Title */}
      <Text className="text-xl font-bold text-gray-800 mb-4 ml-6">
        Insurance
      </Text>

      {/* Grid */}
      <View className="flex-row flex-wrap">
        {insuranceOptions.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="w-1/3 items-center mb-4"
            activeOpacity={0.7}
            onPress={()=>onPress(item.name)}
          >
            {/* Icon */}
            <View
              className="bg-blue-100 w-16 h-16 
            flex rounded-full items-center justify-center 
text-center  
self-center          
            mb-2"
            >
              <Text
                className="text-2xl flex
              self-center
              text-center"
              >
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
