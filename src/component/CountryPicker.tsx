import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Country} from '../types';
import {colors} from '../utilities';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  description: string;
  countries: Country[];
  code: string | null;
  name: string | null;
  onChangeCountry: (code: string | null, name: string | null) => void;
}
const CountryPicker = ({
  description,
  countries,
  code,
  name,
  onChangeCountry,
}: Props) => {
  const [countryCode, setCountryCode] = useState<string | null>(code);
  const [showPicker, setShowPicker] = useState<boolean>(false);

  return (
    <View style={[styles.container, showPicker && styles.pickerShowStyle]}>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity
        onPress={() => {
          setShowPicker(!showPicker);
        }}>
        <View style={styles.pickerContainer}>
          <Text style={styles.value}>{name}</Text>
        </View>
      </TouchableOpacity>
      {showPicker && (
        <Picker
          mode={'dropdown'}
          selectedValue={countryCode}
          style={styles.pickerStyle}
          onValueChange={itemValue => {
            setCountryCode(itemValue);
            const countryItem = countries.find(item => item.ISO2 === itemValue);
            if (countryItem) {
              onChangeCountry(itemValue, countryItem.Country);
              setShowPicker(false);
            }
          }}>
          {countries?.map(item => (
            <Picker.Item
              key={item.ISO2}
              label={item.Country}
              value={item.ISO2}
            />
          ))}
        </Picker>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grey.grey7,
    borderRadius: 4,
    paddingHorizontal: 8,
    height: 51,
  },
  pickerStyle: {
    height: 50,
    width: '100%',
  },
  pickerShowStyle: {
    height: 300,
  },
  description: {
    fontSize: 16,
    color: colors.grey.grey3,
    marginBottom: 8,
  },
  value: {
    fontSize: 17,
    color: colors.black.black,
  },
});

export default CountryPicker;
