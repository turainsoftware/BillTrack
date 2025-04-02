import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeLayout from './HomeLayout';
import {PrimaryHeader, TodayRevenue} from '../../components';

const Home = () => {
  return (
    <HomeLayout>
      <PrimaryHeader />
      <ScrollView style={{flex: 1, paddingHorizontal: 20, paddingVertical: 10}}>
        <TodayRevenue />
      </ScrollView>
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
