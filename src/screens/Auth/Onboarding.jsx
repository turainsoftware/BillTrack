import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, fonts} from '../../util/utils';
import {StackActions, useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import AuthLayout from './AuthLayout';

const {width} = Dimensions.get('screen');

const PAGE_DETAILS = [
  {
    id: '1',
    image: require('./../../../assets/images/onboarding1.json'),
    title: 'Welcome To BillTrack',
    isDesc: true,
    desc: 'Simplify your billing and payments. Track expenses, automate payments, and stay on top of your finances.',
  },
  {
    id: '2',
    image: require('./../../../assets/images/onboarding2.json'),
    title: 'Smart Billing Tools',
    isDesc: false,
    contents: [
      'Generate GST-compliant invoices.',
      'Track invoices with real-time updates.',
      'Use powerful analytics to grow your business.',
      'Access your data from multiple devices anytime, anywhere.',
    ],
  },
  {
    id: '3',
    image: require('./../../../assets/images/onboarding3.json'),
    title: 'Optimize Your Workflow',
    isDesc: false,
    contents: [
      'Automate recurring invoices and reminders.',
      'Save time with ready-made templates.',
      'Use expense tracking and budgeting tools for better financial insights.',
    ],
  },
];

const OnboardingItem = ({item}) => {
  return (
    <View style={styles.itemWrapper}>
      {/* <Image
        source={item.image}
        resizeMode="cover"
        style={styles.bannerImage}
      /> */}
      <LottieView
        source={item.image}
        autoPlay
        loop
        style={styles.bannerImage}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        {item.isDesc ? (
          <Text style={styles.descText}>{item.desc}</Text>
        ) : (
          <View style={styles.listContainer}>
            {item.contents.map((content, index) => (
              <View style={styles.listItem} key={`content-${index}`}>
                <Image
                  source={require('./../../../assets/images/arrowIcon.webp')}
                  style={styles.bulletIcon}
                  resizeMode="cover"
                />
                <Text style={styles.itemText}>{content}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const PaginationDots = ({activeIndex, fadeAnim}) => {
  return (
    <View style={styles.dotContainer}>
      {PAGE_DETAILS.map((_, index) => {
        const isActive = activeIndex === index;
        return (
          <Animated.View
            key={`dot-${index}`}
            style={[
              styles.dot,
              isActive && styles.activeDot,
              {
                opacity: fadeAnim.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: [0.5, 1, 0.5],
                  extrapolate: 'clamp',
                }),
                transform: [
                  {
                    scale: fadeAnim.interpolate({
                      inputRange: [index - 1, index, index + 1],
                      outputRange: [0.8, 1.2, 0.8],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const Onboarding = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  const handleNext = () => {
    if (currentIndex < PAGE_DETAILS.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
      setCurrentIndex(prev => prev + 1);
      Animated.timing(fadeAnim, {
        toValue: currentIndex + 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      // Navigate to next screen when onboarding is complete
      navigation.dispatch(StackActions.replace('AuthHome'));
    }
  };

  const updateCurrentIndex = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / width);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
      Animated.timing(fadeAnim, {
        toValue: newIndex,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <AuthLayout
      source={require('./../../../assets/images/bg1.png')}
      resizeMode="cover"
      style={styles.background}>
      
        <View style={styles.mainContainer}>
          <FlatList
            ref={flatListRef}
            data={PAGE_DETAILS}
            keyExtractor={item => item.id}
            renderItem={({item}) => <OnboardingItem item={item} />}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            snapToInterval={width}
            decelerationRate="fast"
            scrollEventThrottle={16}
            onMomentumScrollEnd={updateCurrentIndex}
            getItemLayout={(_, index) => ({
              length: width,
              offset: width * index,
              index,
            })}
          />
          <View style={styles.footerContainer}>
            <PaginationDots activeIndex={currentIndex} fadeAnim={fadeAnim} />
            <TouchableOpacity style={styles.btn} onPress={handleNext}>
              <Text style={styles.btnText}>
                {currentIndex === 0
                  ? 'NEXT'
                  : currentIndex === 1
                  ? 'CONTINUE'
                  : 'GET STARTED'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 0.85,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemWrapper: {
    width,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bannerImage: {
    width: 300,
    height: 300,
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    paddingBottom: 20,
  },
  btn: {
    width: 140,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 14,
    fontFamily: fonts.semibold,
    color: '#ffffff',
    letterSpacing: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotContainer: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.backgroundColor,
  },
  activeDot: {
    width: 16,
    height: 6,
    backgroundColor: colors.primary,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
    marginTop: 10,
  },
  titleText: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: 1,
  },
  descText: {
    width: 300,
    fontSize: 12,
    fontFamily: fonts.regular,
    textAlign: 'center',
    lineHeight: 22,
    color: colors.textSecondary,
  },
  listContainer: {
    width: 300,
    gap: 10,
  },
  listItem: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
  },
  bulletIcon: {
    width: 16,
    height: 16,
    marginTop: 2,
  },
  itemText: {
    fontSize: 13,
    fontFamily: fonts.medium,
    color: colors.textSecondary,
    flex: 1,
    lineHeight: 18,
  },
});

export default Onboarding;
