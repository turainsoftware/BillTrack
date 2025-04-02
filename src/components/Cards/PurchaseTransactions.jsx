import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../util/utils';

const PurchaseTransactions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Purchase Transactions</Text>
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.iconContaienr}>
          <Image
            style={styles.icon}
            source={require('./../../../assets/images/ptpi.webp')}
          />
          <View>
            <Text style={styles.text}>Purchase</Text>
            <Text style={[styles.text, {marginTop: -5}]}>Invoice</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContaienr}>
          <Image
            style={styles.icon}
            source={require('./../../../assets/images/ptpp.webp')}
          />
          <TouchableOpacity>
            <Text style={styles.text}>Purchase</Text>
            <Text style={[styles.text, {marginTop: -5}]}>Payments</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContaienr}>
          <Image
            style={styles.icon}
            source={require('./../../../assets/images/ptpr.webp')}
          />
          <View>
            <Text style={styles.text}>Purchase</Text>
            <Text style={[styles.text, {marginTop: -5}]}>Return</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContaienr}>
          <Image
            style={styles.icon}
            source={require('./../../../assets/images/ptdn.webp')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Debit</Text>
            <Text style={[styles.text, {marginTop: -5}]}>Note</Text>
          </View>
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
    marginVertical: 10,
  },
  titleText: {
    fontSize: 16,
    fontFamily: fonts.semibold,
  },
  contentContainer: {
    height: 100,
    backgroundColor: '#FFFFFF',
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#00000030',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  iconContaienr: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  icon: {
    width: 40,
    height: 40,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    fontFamily: fonts.regular,
    color: colors.textSlate,
  },
});

export default PurchaseTransactions;
