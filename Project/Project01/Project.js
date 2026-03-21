import { Products } from './Seed';
import React, { useState } from 'react';
import {
  View,
  StatusBar,
  RefreshControl,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

import Header from './ProjectComponent/Header';
import Footer from './ProjectComponent/Footer';
import { Card } from './ProjectComponent/Card';

const AppContent = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingTop: 12,
        paddingBottom: 80, // space for footer
      }}
    >
      {Products.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </View>
  );
};

export const Project = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
        backgroundColor: '#eef2f5',
      }}
    >
      {/* STATUS BAR */}
      <StatusBar backgroundColor="#16a34a" barStyle="light-content" />

      {/* HEADER */}
      <Header />

      {/* PRODUCT LIST */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#16a34a']}
          />
        }
      >
        <AppContent />
      </ScrollView>

      {/* FOOTER */}
      <Footer />
    </KeyboardAvoidingView>
  );
};
