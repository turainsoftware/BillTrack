import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeLayout from './HomeLayout';
import {DashboardSecond, PrimaryHeader, TodayRevenue} from '../../components';

const Home = () => {
  return (
    <HomeLayout>
      <PrimaryHeader />
      <ScrollView style={{flex: 1, paddingHorizontal: 20, paddingVertical: 10}}>
        <TodayRevenue />
        <View style={styles.secondCardContainer}>
          <DashboardSecond
            value={129}
            description={'Total Invoice'}
            icon={require('./../../../assets/images/bill.webp')}
          />
          <DashboardSecond
            value={83}
            description={"Today's Customer"}
            icon={require('./../../../assets/images/user.webp')}
          />
        </View>
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
  secondCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
});

export default Home;
