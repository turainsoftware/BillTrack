import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {colors, fonts} from '../../util/utils';

const TransactionCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>Bikash Prasad</Text>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.invoiceTxt}>Invoice - #BT0005</Text>
          <Text style={styles.invoiceTxt}>Date - 22-11-2024</Text>
        </View>
        <Text style={styles.moneyText}>₹ 1200.00</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Payment received on 21-11-2024</Text>
        <TouchableOpacity style={styles.footerRightContainer}>
          <Feather name="upload" size={14} color={colors.primary} />
          <Text style={styles.footerRightTxt}>Send reciept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  nameText: {
    fontSize: 14,
    fontFamily: fonts.semibold,
    color: '#000000',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  invoiceTxt: {
    fontSize: 12,
    fontFamily: fonts.medium,
    color: colors.textSlate,
  },
  moneyText: {
    fontSize: 14,
    fontFamily: fonts.semibold,
    color: '#000000',
  },
  divider: {
    height: 1,
    backgroundColor: '#00000010',
    marginVertical: 10,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    color: '#28A745',
    fontSize: 10,
    fontFamily: fonts.medium,
  },
  footerRightContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  footerRightTxt: {
    fontSize: 10,
    fontFamily: fonts.bold,
    color: colors.primary,
  },
});

export default TransactionCard;
