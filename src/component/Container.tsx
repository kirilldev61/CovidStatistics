import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {colors} from '../utilities';
interface Props {
  children: React.ReactElement;
  style?: any;
}
const Container = ({children, style = {}}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, style]}>
        <StatusBar barStyle={'dark-content'} />
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white.white,
  },
});
export default Container;
