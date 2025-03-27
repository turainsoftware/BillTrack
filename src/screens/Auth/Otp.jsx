import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useReducer, useRef, useState} from 'react';
import AuthLayout from './AuthLayout';
import {colors, fonts} from '../../util/utils';
import {useRoute} from '@react-navigation/native';

const Otp = () => {
  const route = useRoute();
  const {phone} = route.params || {};

  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRef = useRef([]);

  const [timer, setTimer] = useState(30);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [timer, isActive]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputRef.current[index + 1].focus();
    }

    if (newOtp.every(val => val !== '') && newOtp.length === 4) {
      console.log('New Otp Is: ', newOtp.join(''));
    }
  };

  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  const handleKeyPress = ({nativeEvent: {key}}, index) => {
    if (key === 'Backspace' && otp[index] === '' && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      setTimeout(() => {
        inputRef.current[index - 1].focus();
      }, 25);
    }
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
              source={require('./../../../assets/images/otp.webp')}
              style={styles.bannerImage}
              resizeMode="contain"
            />
            <View style={styles.contentContainer}>
              <Text style={styles.titleText}>Verify Your Mobile Number</Text>
              <Text style={styles.descText}>
                Enter the OTP sent to{' '}
                <Text style={{color: colors.primary}}>+91 {phone}</Text> to
                verify and access your account securely.
              </Text>
            </View>
          </View>
          <View style={styles.footerContainer}>
            <View style={styles.optContainer}>
              <Text style={styles.otpText}>Enter your OTP*</Text>
              <View style={styles.optInputContainer}>
                {otp.map((item, index) => (
                  <TextInput
                    key={index}
                    ref={ref => (inputRef.current[index] = ref)}
                    style={styles.otpInput}
                    selectionColor={colors.secondary}
                    keyboardType="phone-pad"
                    maxLength={1}
                    value={otp[index]}
                    onChangeText={text => handleChange(text, index)}
                    onKeyPress={e => handleKeyPress(e, index)}
                  />
                ))}
              </View>
            </View>
            <View style={styles.footerContent}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.contextText}>Didn’t receive the OTP?</Text>
                <Text style={styles.contextText}>
                  Resend in{' '}
                  <Text style={{color: colors.primary}}>
                    {formatTime(timer)}
                  </Text>
                </Text>
              </View>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>VERIFY OTP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </AuthLayout>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  logo: {
    position: 'absolute',
    left: 25,
    top: 20,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  bannerImage: {
    width: 205,
    height: 200,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  titleText: {
    fontSize: 22,
    fontFamily: fonts.semibold,
    marginTop: 10,
  },
  descText: {
    width: 311,
    textAlign: 'center',
    fontFamily: fonts.medium,
    fontSize: 14,
    letterSpacing: 0.2,
    color: colors.textSlate,
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 25,
  },
  optContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  otpText: {
    fontSize: 12,
    fontFamily: fonts.semibold,
    color: colors.secondary,
  },
  optInputContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  otpInput: {
    width: 55,
    height: 55,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#C3C3C3',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.semibold,
  },
  footerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  contextText: {
    fontSize: 12,
    fontFamily: fonts.regular,
    color: '#4C4C4C',
  },
  btn: {
    width: 150,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 13,
    fontFamily: fonts.bold,
    color: '#ffffff',
    letterSpacing: 1,
  },
});

export default Otp;
