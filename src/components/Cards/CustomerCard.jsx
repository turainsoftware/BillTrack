import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {colors, fonts} from '../../util/utils';

const CustomerCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Pritam Bala</Text>
        <Text style={styles.headerText}>₹ 1200.00</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.footerContainer}>
        <Text style={styles.paymentText}>Payment received on 22-11-2024</Text>
        <TouchableOpacity style={styles.sendContainer}>
          <Feather name="upload" size={13} color={colors.primary} />
          <Text style={styles.sendText}>Send reciept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    // marginTop: 10,
    gap: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 0,
    elevation: 2,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 14,
    fontFamily: fonts.semibold,
    color: '#000000',
    letterSpacing: 0.25,
  },
  divider: {
    height: 1,
    backgroundColor: '#DFDFDF',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sendContainer: {
    flexDirection: 'row',
  },
  paymentText: {
    fontSize: 10,
    fontFamily: fonts.medium,
    color: '#28A745',
  },
  sendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  sendText: {
    fontSize: 10,
    fontFamily: fonts.bold,
    color: colors.primary,
  },
});

export default CustomerCard;
