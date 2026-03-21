import React from 'react';
import { View, Text, Image, Pressable, ScrollView } from 'react-native';

export const DetailsCard = ({ item, close }) => {
  const oldPrice = Math.round(item.price / (1 - item.offer / 100));

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 12,
          width: '100%',
          maxHeight: '85%',
        }}
      >
        <ScrollView>
          {/* Product Image */}
          <Image
            source={{ uri: item.image }}
            style={{
              width: '100%',
              height: 220,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              resizeMode: 'cover',
            }}
          />

          <View style={{ padding: 15 }}>
            {/* Title */}
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 5,
              }}
            >
              {item.name}
            </Text>

            {/* Brand */}
            <Text style={{ color: 'gray', marginBottom: 5 }}>
              Brand: {item.brand}
            </Text>

            {/* Rating */}
            <Text style={{ color: '#f39c12', marginBottom: 6 }}>
              ⭐ {item.rating} ({item.reviews} reviews)
            </Text>

            {/* Price */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                ₹{item.price}
              </Text>

              <Text
                style={{
                  marginLeft: 10,
                  textDecorationLine: 'line-through',
                  color: 'gray',
                }}
              >
                ₹{oldPrice}
              </Text>

              <Text
                style={{
                  marginLeft: 10,
                  color: 'green',
                  fontWeight: 'bold',
                }}
              >
                {item.offer}% OFF
              </Text>
            </View>

            {/* Delivery */}
            <Text style={{ marginTop: 5, color: 'green' }}>
              {item.delivery}
            </Text>

            {/* Stock */}
            <Text
              style={{
                marginTop: 5,
                color: item.stock ? 'green' : 'red',
                fontWeight: '500',
              }}
            >
              {item.stock ? 'In Stock' : 'Out of Stock'}
            </Text>

            {/* Details */}
            <Text style={{ marginTop: 10, lineHeight: 20 }}>
              {item.details}
            </Text>

            {/* Buttons */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}
            >
              <Pressable
                style={{
                  backgroundColor: '#f1c40f',
                  padding: 12,
                  borderRadius: 6,
                  flex: 1,
                  marginRight: 5,
                }}
              >
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  Add to Cart
                </Text>
              </Pressable>

              <Pressable
                style={{
                  backgroundColor: '#e67e22',
                  padding: 12,
                  borderRadius: 6,
                  flex: 1,
                  marginLeft: 5,
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  Buy Now
                </Text>
              </Pressable>
            </View>

            {/* Close Button */}
            <Pressable
              onPress={close}
              style={{
                marginTop: 15,
                padding: 10,
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: 'red',
                  fontWeight: 'bold',
                }}
              >
                Close
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
