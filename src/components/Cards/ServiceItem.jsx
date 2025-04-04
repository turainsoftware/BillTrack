import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../util/utils';

const ServiceItem = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.itemImage}
        source={require('./../../../assets/images/service.png')}
      />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.rightContainer}>
          <Text style={styles.topText}>Chicken Biryani</Text>
          <Text style={styles.topText}>₹ 250.00</Text>
        </View>
        <View style={[styles.rightContainer, {marginTop: -2}]}>
          <Text style={styles.subNameText}>Main course</Text>
          <Text style={styles.itemText}>Per piece</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topText: {
    fontSize: 14,
    fontFamily: fonts.semibold,
    letterSpacing: 0.25,
  },
  subNameText: {
    fontSize: 12,
    fontFamily: fonts.regular,
    letterSpacing: 0.25,
    color: colors.textSlate,
  },
  itemText: {
    fontSize: 12,
    fontFamily: fonts.regular,
    color: '#FF0000',
  },
  itemImage: {
    width: 40,
    height: 40,
  },
});

export default ServiceItem;
