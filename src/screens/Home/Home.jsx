import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeLayout from './HomeLayout';

const Home = () => {
  return (
    <HomeLayout>
      <Text>Helloworld</Text>
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
