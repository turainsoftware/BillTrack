import {Animated, Easing, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {DotLoader} from '../../components';
import {StackActions, useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const scaleAnimation = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(scaleAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Onboarding'));
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{transform: [{scale: scaleAnimation}]}}>
        <Image
          source={require('./../../../assets/images/splashIcon.webp')}
          style={styles.icon}
        />
        <DotLoader />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 80,
    height: 65,
  },
});

export default SplashScreen;
