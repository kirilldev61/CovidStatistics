import React from 'react';
import {
  StackActions,
  CommonActions,
  DrawerActions,
  NavigationContainerRef,
  ParamListBase,
} from '@react-navigation/native';

export const navigationRef =
  React.createRef<NavigationContainerRef<ParamListBase>>();

export const navigate = (name: string, params?: object) => {
  if (navigationRef.current) {
    navigationRef.current.dispatch(CommonActions.navigate(name, params));
  }
};

export const replace = (name: string, params?: object) => {
  if (navigationRef.current) {
    navigationRef.current.dispatch(StackActions.replace(name, params));
  }
};

export const back = () => {
  if (navigationRef.current) {
    navigationRef.current.dispatch(CommonActions.goBack());
  }
};

export const push = (name: string, params?: object) => {
  if (navigationRef.current) {
    navigationRef.current.dispatch(StackActions.push(name, params));
  }
};

export const popToTop = () => {
  if (navigationRef.current) {
    navigationRef.current.dispatch(StackActions.popToTop());
  }
};

export const popTo = (count: number) => {
  if (navigationRef.current) {
    navigationRef.current.dispatch(StackActions.pop(count));
  }
};

export const openDrawer = () => {
  if (navigationRef.current) {
    navigationRef.current.dispatch(DrawerActions.openDrawer());
  }
};

export const closeDrawer = () => {
  if (navigationRef.current) {
    navigationRef.current.dispatch(DrawerActions.closeDrawer());
  }
};

export const setParam = (key: string, params: object) => {
  if (navigationRef.current) {
    navigationRef.current.dispatch({
      ...CommonActions.setParams(params),
      source: key,
    });
  }
};
