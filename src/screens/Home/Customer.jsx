import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HomeLayout from './HomeLayout';
import {SecondaryHeader} from '../../components';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors, fonts} from '../../util/utils';

const Customer = () => {
  return (
    <HomeLayout>
      <SecondaryHeader title={'Customer List'} />
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <AntDesign name="search1" size={16} color="#12121250" />
          <TextInput
            style={styles.inputBox}
            placeholder="Search"
            placeholderTextColor={'#12121250'}
          />
        </View>
        <TouchableOpacity style={styles.sliderContainer}>
          <FontAwesome6 name="sliders" size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </HomeLayout>
  );
};

export default Customer;

const styles = StyleSheet.create({
  searchContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
    backgroundColor: colors.primaryBackground,
  },
  searchInputContainer: {
    height: 40,
    width: '85%',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#DFDFDF',
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  inputBox: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    marginTop: 6,
  },
  sliderContainer: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
