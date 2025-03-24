import {Animated, Easing, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {DotLoader} from '../../components';

const SplashScreen = () => {
  const scaleAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
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
