import {
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export const Header = () => {
  return (
    <View>

      {/* Status Bar */}
      <StatusBar backgroundColor="#1e40af" barStyle="light-content" />

      {/* Header Container */}
      <View className="bg-blue-800 px-6 py-6 rounded-3xl mb-2 mx-3">

        <View className="flex-row justify-between items-center">

          {/* Logo */}
          <TouchableOpacity>
            <Text className="text-white text-xl font-bold">
              MyWallet
            </Text>
          </TouchableOpacity>

          {/* Right Section */}
          <View className="flex-row items-center gap-5">

            <TouchableOpacity className="bg-blue-700 px-3 py-1 rounded-lg">
              <Text className="text-white text-sm">
                ₹1200
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text className="text-white text-lg">
                🔔
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>
    </View>
  );
};