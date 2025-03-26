import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, fonts} from '../../util/utils';
import AuthLayout from './AuthLayout';
import {useNavigation} from '@react-navigation/native';

const AuthHome = () => {
  const navigation = useNavigation();
  return (
    <AuthLayout>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Image
            source={require('./../../../assets/images/AuthHome.webp')}
            style={styles.bannerImage}
            resizeMode="contain"
          />
          <Text style={styles.title}>Hello</Text>
          <Text style={styles.desc}>
            Welcome to Billtrack, where you can manage your business invoice
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: colors.primary}]}
            onPress={() => navigation.navigate('Login')}>
            <Text
              style={[
                styles.btnText,
                {
                  color: '#fff',
                },
              ]}>
              LOGIN
            </Text>
          </TouchableOpacity>
          <View style={styles.barContainer}>
            <View style={styles.bar} />
            <Text style={styles.barText}>or</Text>
            <View style={styles.bar} />
          </View>
          <TouchableOpacity
            style={[
              styles.btn,
              {
                borderWidth: 1,
                borderColor: colors.backgroundColor,
                color: colors.backgroundColor,
              },
            ]}>
            <Text style={styles.btnText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  bannerImage: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 36,
    fontFamily: fonts.semibold,
    color: colors.primary,
  },
  desc: {
    textAlign: 'center',
    width: 250,
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.textSlate,
  },
  barContainer: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: {
    width: 15,
    height: 1.5,
    backgroundColor: '#12121280',
  },
  barText: {
    color: '#12121280',
    fontSize: 16,
    fontFamily: fonts.medium,
  },
  footer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    gap: 20,
  },
  btn: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    fontSize: 14,
    fontFamily: fonts.semibold,
    letterSpacing: 1,
  },
});

export default AuthHome;
