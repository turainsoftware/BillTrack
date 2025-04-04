import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeLayout from './HomeLayout';
import {SecondaryHeader} from '../../components';

const Customer = () => {
  return (
    <HomeLayout>
      <SecondaryHeader />
    </HomeLayout>
  );
};

export default Customer;

const styles = StyleSheet.create({});
