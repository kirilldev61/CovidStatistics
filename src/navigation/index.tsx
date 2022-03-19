import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import {MainScreen, CountriesCaseScreen, ReportScreen} from '../screens';

const NavStack = createStackNavigator();

const MainNav = () => {
  const stackNavOptions: StackNavigationOptions = {
    headerStyle: styles.transStyle,
    headerTransparent: true,
    gestureResponseDistance: Dimensions.get('window').width,
  };

  return (
    <NavStack.Navigator screenOptions={stackNavOptions}>
      <NavStack.Screen
        name="Main"
        component={MainScreen}
        options={{header: () => null}}
      />
      <NavStack.Screen
        name="CountriesCase"
        component={CountriesCaseScreen}
        options={{header: () => null}}
      />
      <NavStack.Group screenOptions={{presentation: 'modal'}}>
        <NavStack.Screen
          name="Report"
          component={ReportScreen}
          options={{header: () => null}}
        />
      </NavStack.Group>
    </NavStack.Navigator>
  );
};

const styles = StyleSheet.create({
  transStyle: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
});
export * from './root';
export default MainNav;
