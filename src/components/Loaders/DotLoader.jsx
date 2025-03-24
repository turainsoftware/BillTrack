import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { colors } from '../../util/utils';

const DotLoader = () => {
  const scales = [
    useRef(new Animated.Value(1)).current,
    useRef(new Animated.Value(1)).current,
    useRef(new Animated.Value(1)).current,
    useRef(new Animated.Value(1)).current,
  ];

  useEffect(() => {
    const animations = scales.map((scale, index) =>
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.3,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ])
    );

    Animated.loop(Animated.stagger(300, animations)).start();
  }, []);

  return (
    <View style={styles.loader}>
      {scales.map((scale, index) => (
        <Animated.View
          key={index}
          style={[styles.circle, { transform: [{ scale }] }]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 7,
    marginHorizontal: 4,
    backgroundColor: colors.primary,
  },
});

export default DotLoader;
