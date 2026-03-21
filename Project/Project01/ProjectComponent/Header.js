import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Modal } from 'react-native';

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState('');

  const openSearch = () => setModalVisible(true);
  const closeSearch = () => setModalVisible(false);

  const handleSearch = () => {
    console.log('Search:', search);
    setModalVisible(false); // close modal
  };

  return (
    <>
      {/* HEADER */}
      <View className="bg-green-600 pt-5 pb-3 px-4">
        {/* Top Row */}
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-white text-2xl font-bold">ShopEasy</Text>

          {/* Icons */}
          <View className="flex-row items-center gap-4">
            <Pressable onPress={openSearch}>
              <Text className="text-white text-xl">🔍</Text>
            </Pressable>

            <Pressable>
              <Text className="text-white text-xl">🛒</Text>
            </Pressable>

            <Pressable>
              <Text className="text-white text-xl">👤</Text>
            </Pressable>
          </View>
        </View>

        {/* Location */}
        <Text className="text-white text-sm">📍 Deliver to Kolkata</Text>
      </View>

      {/* SEARCH MODAL */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.4)',
            justifyContent: 'center',
            padding: 20,
          }}
        >
          <View className="bg-white rounded-xl p-4">
            <View className="flex-row items-center bg-gray-100 rounded-lg px-3 py-2">
              <Text className="mr-2">🔍</Text>

              <TextInput
                placeholder="Search products..."
                className="flex-1"
                value={search}
                onChangeText={setSearch}
                returnKeyType="search"
                onSubmitEditing={handleSearch} // ✅ keyboard OK
              />

              <Pressable onPress={closeSearch}>
                <Text className="text-red-500 font-bold">Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Header;
