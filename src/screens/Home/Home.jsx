import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeLayout from './HomeLayout';
import { PrimaryHeader } from '../../components';

const Home = () => {
  return (
    <HomeLayout>
      <PrimaryHeader/>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
