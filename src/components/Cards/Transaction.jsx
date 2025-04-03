import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors, fonts} from '../../util/utils';
import TransactionCard from './TransactionCard';

const Transaction = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Transactions</Text>
        <TouchableOpacity style={styles.topRightContainer}>
          <AntDesign name="calendar" size={16} color="#007CFF" />
          <Text style={styles.rightText}>Current Month</Text>
        </TouchableOpacity>
      </View>
      <TransactionCard />
      <TransactionCard />
      <TransactionCard />
      <TransactionCard />
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>View More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 50,
    marginTop: 10,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 16,
    fontFamily: fonts.semibold,
    color: '#000000',
  },
  topRightContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
  },
  rightText: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: '#007CFF',
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  btn: {
    // width: 100,
    // height: 30,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  btnText: {
    fontSize: 10,
    fontFamily: fonts.bold,
    color: colors.primary,
    letterSpacing: 1,
  },
});

export default Transaction;
