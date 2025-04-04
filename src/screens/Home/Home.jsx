import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import HomeLayout from './HomeLayout';
import {
  DashboardSecond,
  PrimaryHeader,
  PurchaseTransactions,
  SalesTransaction,
  TodayRevenue,
  Transaction,
} from '../../components';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {colors, fonts} from '../../util/utils';

const Home = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = ['60%'];

  const handleOpen = () => bottomSheetRef.current?.expand();
  const handleClose = () => bottomSheetRef.current?.close();
  // Bottom Sheet Backdrop
  const renderBackdrop = props => (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      opacity={0.5}
    />
  );

  const dateRanges = [
    'Today',
    'Yesterday',
    'This week',
    'Last week',
    'This month',
    'Last quarter',
    'This year',
  ];

  const [selectedRangeIndex, setSelectedRangeIndex] = useState(0);

  return (
    <HomeLayout>
      <PrimaryHeader />
      <GestureHandlerRootView style={{flex: 1}}>
        <ScrollView
          style={{flex: 1, paddingHorizontal: 20, paddingVertical: 10}}>
          {/* Today's Revenue*/}
          <TodayRevenue />
          {/* Today's Revenue*/}

          {/* Second Card*/}
          <View style={styles.secondCardContainer}>
            <DashboardSecond
              value={129}
              description={'Total Invoice'}
              icon={require('./../../../assets/images/bill.webp')}
            />
            <DashboardSecond
              value={83}
              description={"Today's Customer"}
              icon={require('./../../../assets/images/user.webp')}
            />
          </View>
          {/* Second Card*/}

          {/* Sales Transaction */}
          <SalesTransaction />
          {/* Sales Transaction */}

          {/* Purchase Transaction */}
          <PurchaseTransactions />
          {/* Purchase Transaction */}

          {/* Transactions */}
          <Transaction handleCurentMonthOpen={handleOpen} />
          {/* Transactions */}
        </ScrollView>
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          index={-1}
          enablePanDownToClose
          enableContentPanningGesture
          backdropComponent={renderBackdrop}
          animationConfigs={{
            duration: 400,
          }}
          backgroundStyle={{backgroundColor: colors.primaryBackground}}>
          <BottomSheetView style={styles.bottomSheetContent}>
            <Text style={styles.title}>Select Date Range</Text>
            <View style={styles.selectableItems}>
              {dateRanges.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={styles.btnContainer}
                    key={index}
                    onPress={() => {
                      if (index !== selectedRangeIndex) {
                        setSelectedRangeIndex(prev => index);
                        handleClose();
                      }
                    }}>
                    <View style={styles.btnSubContainer}>
                      <Text style={styles.btnText}>{item}</Text>
                      <View
                        style={[
                          styles.radioBtn,
                          index === selectedRangeIndex && {
                            borderColor: colors.primary,
                          },
                        ]}>
                        {index === selectedRangeIndex && (
                          <View style={styles.innerRadioBtn} />
                        )}
                      </View>
                    </View>
                    {dateRanges.length - 1 !== index && (
                      <View style={styles.divider} />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  bottomSheetContent: {
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.primary,
  },
  selectableItems: {
    marginTop: 20,
  },
  btnContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  btnSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioBtn: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#C3C3C3',
    borderRadius: 16 / 2,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerRadioBtn: {
    width: 10,
    height: 10,
    backgroundColor: colors.primary,
    borderRadius: 10 / 2,
  },
  btnText: {
    fontSize: 13,
    fontFamily: fonts.medium,
    color: colors.textSlate,
  },
  dottedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  divider: {
    // height: 2,
    borderTopWidth: 1,
    borderColor: '#DCDCDC',
    borderStyle: 'dashed',
    marginVertical: 8,
  },
});

export default Home;
