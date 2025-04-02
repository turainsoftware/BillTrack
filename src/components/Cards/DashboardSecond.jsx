import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../util/utils';

const DashboardSecond = ({value, description, icon}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.valueText}>{value}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Image style={styles.icon} source={icon} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
    height: 70,
    backgroundColor: '#EA6B2310',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f5b590',
  },
  icon: {
    width: 40,
    height: 40,
  },
  textContainer: {},
  valueText: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: '#EA6B23',
  },
  description: {
    fontSize: 10,
    fontFamily: fonts.medium,
    color: '#000000',
    marginTop: -4,
  },
});

export default DashboardSecond;
