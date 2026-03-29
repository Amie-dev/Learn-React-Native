import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';

import { Header } from '../ProjectComponents/Header';
import { Footer } from '../ProjectComponents/Footer';
import { Banner } from '../ProjectComponents/Banner';
import { Recharge } from '../ProjectComponents/Recharge';
import { Insurance } from '../ProjectComponents/Insurance';
import { HelpSupport } from '../ProjectComponents/HelpSuppot';

const AppContent = ({ navigation }) => {
  return (
    <View className="mt-3 ">
      {/* Banner */}

      <Banner { ...navigation } />
      <Recharge { ...navigation }/>
      <Insurance { ...navigation }/>
      <HelpSupport { ...navigation }/>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
        backgroundColor: '#eef2f5',
      }}
      className="m-2 bg-slate-200"
    >
      {/* Header */}
      <Header />

      {/* Content */}
      <ScrollView className="bg-slate-200">
        <AppContent { ...navigation }/>
      </ScrollView>

      {/* Footer */}
      {/* <Footer /> */}
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
