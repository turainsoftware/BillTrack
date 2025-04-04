import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors, fonts} from '../../util/utils';

const SecondaryHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <MaterialIcons name="arrow-back" size={25} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.titleText}>Customer List</Text>
      </View>
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <MaterialIcons name="headset-mic" size={20} color={colors.textSlate} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  titleText: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: '#000000',
  },
});

export default SecondaryHeader;
