import React from 'react';
import {View, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {colors} from '../utilities';
interface Props {
  title: string;
  boldTitle: string;
  style?: StyleProp<ViewStyle>;
}
const HeaderTitle = ({title, boldTitle, style = {}}: Props) => {
  return (
    <View style={[styles.itemContainer, style]}>
      <Text style={styles.titleLabel}>
        {title} <Text style={styles.boldLabel}>{boldTitle}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 8,
    padding: 4,
  },
  titleLabel: {
    fontSize: 22,
    fontWeight: '300',
    color: colors.grey.grey1,
  },
  boldLabel: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.black.black,
  },
});
export default HeaderTitle;
