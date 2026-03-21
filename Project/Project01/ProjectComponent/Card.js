import React, { useState } from 'react';
import { Text, View, Dimensions, Image, Modal } from 'react-native';
import { BtnStyle, BtnText } from './ButtonStyle';
import { DetailsCard } from './Detials';

const { width } = Dimensions.get('window');

export const Card = ({ item }) => {
  const oldPrice = Math.round(item.price / (1 - item.offer / 100));
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View
        style={{
          width: width / 2 - 20,
          padding: 8,
        }}
      >
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: 10,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 6,
            elevation: 3,
          }}
        >
          {/* Image */}
          <Image
            source={{ uri: item.image }}
            style={{
              width: '100%',
              height: 100,
              borderRadius: 8,
              resizeMode: 'cover',
              backgroundColor: 'green',
            }}
          />

          {/* Title */}
          <Text
            numberOfLines={2}
            style={{
              marginTop: 6,
              fontSize: 13,
              fontWeight: '500',
            }}
          >
            {item.name}
          </Text>

          {/* Rating */}
          <Text style={{ color: '#f39c12', fontSize: 12 }}>
            ⭐ {item.rating} ({item.reviews})
          </Text>

          {/* Price */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginTop: 4,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
              ₹{item.price}
            </Text>

            <Text
              style={{
                marginLeft: 5,
                textDecorationLine: 'line-through',
                color: 'gray',
                fontSize: 12,
              }}
            >
              ₹{oldPrice}
            </Text>

            <Text
              style={{
                marginLeft: 5,
                color: 'green',
                fontWeight: '600',
                fontSize: 12,
              }}
            >
              {item.offer}% OFF
            </Text>
          </View>

          {/* Delivery */}
          <Text style={{ fontSize: 11, color: 'green', marginTop: 2 }}>
            {item.delivery}
          </Text>

          {/* Buttons */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}
          >
            <BtnStyle variant="secondary" onPress={() => setModalVisible(true)}>
              <BtnText>View</BtnText>
            </BtnStyle>

            <BtnStyle variant="primary">
              <BtnText>Buy</BtnText>
            </BtnStyle>
          </View>
        </View>
      </View>

      {/* DETAILS MODAL */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <DetailsCard item={item} close={() => setModalVisible(false)} />
      </Modal>
    </>
  );
};
