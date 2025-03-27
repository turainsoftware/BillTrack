import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AuthLayout from './AuthLayout';

// Icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors, fonts, verifyMobile} from '../../util/utils';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  // Global
  const navigation = useNavigation();

  // State Validations
  const [isValidMobile, setIsValidMobile] = useState(false);

  // State Values
  const [mobileNumber, setMobileNumber] = useState('');

  const handleChangeMobile = text => {
    const cleanedText = text.replace(/[^0-9]/g, '');

    // Check if first digit is >=6 (Indian mobile rule)
    if (cleanedText === '' || cleanedText[0] >= '6') {
      setMobileNumber(cleanedText);
      setIsValidMobile(verifyMobile(cleanedText));
    }
  };

  const handleOtp = () => {
    if (isValidMobile) {
      navigation.navigate('Otp', {
        phone: mobileNumber,
      });
    }
    Keyboard.dismiss;
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <AuthLayout>
        <Image
          style={styles.logo}
          source={require('./../../../assets/images/logo.webp')}
          resizeMode="contain"
        />
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Image
              source={require('./../../../assets/images/login.webp')}
              style={styles.bannerImage}
              resizeMode="contain"
            />
            <Text style={styles.title}>Log in to manage your bills</Text>
            <Text style={styles.desc}>
              Access your billing dashboard to generate invoices, track
              payments, and manage expenses with ease.
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.phoneTitle}>Phone number*</Text>
            <View style={styles.inputContainer}>
              <MaterialIcons name="call" size={24} color={colors.secondary} />
              <View style={styles.inputBar} />
              <TextInput
                style={styles.input}
                placeholder="Enter phone number"
                keyboardType="phone-pad"
                textAlignVertical="center"
                maxLength={10}
                selectionColor={colors.secondary}
                value={mobileNumber}
                onChangeText={text => handleChangeMobile(text)}
                onSubmitEditing={() => console.log('Yes Fuck')}
              />
              {isValidMobile
                ? mobileNumber.length > 0 && (
                    <MaterialIcons
                      name="check-circle"
                      size={16}
                      color={'#008000'}
                    />
                  )
                : mobileNumber.length > 0 && (
                    <Entypo
                      name="circle-with-cross"
                      size={16}
                      color={'#FF0000'}
                    />
                  )}
            </View>
            <TouchableOpacity style={styles.btnContainer} onPress={handleOtp}>
              <Text style={styles.btnText}>GET OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </AuthLayout>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    width: 90,
    height: 20,
    left: 25,
    top: 20,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  bannerImage: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.bold,
  },
  desc: {
    textAlign: 'center',
    width: 310,
    fontSize: 13,
    letterSpacing: 0.2,
    fontFamily: fonts.medium,
    color: colors.textSlate,
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 10,
  },
  phoneTitle: {
    fontSize: 12,
    fontFamily: fonts.semibold,
    color: colors.secondary,
  },
  inputContainer: {
    width: 310,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  inputBar: {
    width: 1.5,
    height: 24,
    backgroundColor: colors.border,
    marginHorizontal: 10,
  },
  input: {
    height: '100%',
    flex: 1,
    fontSize: 16,
    fontFamily: fonts.regular,
    paddingVertical: 0,
    includeFontPadding: false,
  },
  btnContainer: {
    width: 150,
    height: 45,
    backgroundColor: colors.secondary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
  btnText: {
    fontSize: 14,
    fontFamily: fonts.bold,
    letterSpacing: 1,
    color: '#ffffff',
  },
});

export default Login;
