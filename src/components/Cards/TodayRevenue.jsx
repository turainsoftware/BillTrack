import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../../util/utils';

const TodayRevenue = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('./../../../assets/images/bg1.webp')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.moneyText}>5,12,589.00</Text>
        <Text style={styles.titleText}>Today’s Revenue</Text>
      </View>
      <Image
        style={styles.rupeeImage}
        source={require('./../../../assets/images/rupee.webp')}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    backgroundColor: '#E95C0C80',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  img: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  rupeeImage: {
    width: 40,
    height: 40,
  },
  textContainer: {},
  moneyText: {
    fontSize: 28,
    fontFamily: fonts.bold,
    color: '#ffffff',
  },
  titleText: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: fonts.medium,
    marginTop: -5,
  },
});

export default TodayRevenue;
