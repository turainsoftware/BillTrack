import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {fonts} from '../../util/utils';

const PrimaryHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.profile}>
          <Image
            style={styles.profileImage}
            source={require('./../../../assets/images/splashIcon.webp')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.leftRightContainer}>
          <Text style={styles.greetingText}>Welcome Back</Text>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>Pritam Bikash</Text>
            <Image source={require('./../../../assets/images/clap.webp')} />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.notificatinContainer}>
        <MaterialIcons name="notifications" size={25} />
        <View style={styles.dot} />
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryHeader;

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#FFE5D6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#EA6B23',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 26,
    height: 30,
  },
  leftRightContainer: {},
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  greetingText: {
    fontSize: 10,
    fontFamily: fonts.medium,
    color: '#DD5000',
  },
  nameText: {
    fontSize: 16,
    fontFamily: fonts.semibold,
    color: '#000000',
  },
  notificatinContainer: {
    width: 26,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: '#FF0000',
    right: 0,
    top: 0
  },
});
