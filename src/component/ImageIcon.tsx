import React from 'react';
import {StyleSheet, Image, StyleProp, ImageStyle} from 'react-native';
interface Props {
  iconName: string;
  style?: StyleProp<ImageStyle>;
}

const images: {[key: string]: any} = {
  search: require('../assets/png/search.png'),
  back: require('../assets/png/back.png'),
  plus: require('../assets/png/plus.png'),
  arrowUp: require('../assets/png/up-arrow.png'),
  arrowDown: require('../assets/png/down-arrow.png'),
};

const ImageIcon = ({iconName, style}: Props) => {
  return <Image style={[styles.icon, style]} source={images[iconName]} />;
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default ImageIcon;
