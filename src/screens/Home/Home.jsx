import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useRef} from 'react';
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
          index={1}
          enablePanDownToClose
          enableContentPanningGesture
          backdropComponent={renderBackdrop}
          animationConfigs={{
            duration: 400,
          }}>
          <BottomSheetView style={styles.bottomSheetContent}>
            <Text style={styles.title}>Select Date Range</Text>
            <View style={styles.selectableItems}>
              {dateRanges.map((item, index) => {
                return (
                  <TouchableOpacity style={styles.btnContainer} key={index}>
                    <Text>{item}</Text>
                    <View style={styles.radioBtn}>
                      <View />
                    </View>
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
  },
});

export default Home;
