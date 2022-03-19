import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardType,
  ReturnKeyType,
} from 'react-native';
import {colors} from '../utilities';

interface Props {
  description: string;
  keyboardType?: KeyboardType;
  returnKeyType?: ReturnKeyType;
  value: string | number | null;
  onChangeValue: (value: string | number | null) => void;
}
const CountryPicker = ({
  description,
  keyboardType,
  returnKeyType,
  value,
  onChangeValue,
}: Props) => {
  const [inputValue, setInputValue] = useState<string | number | null>(value);
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType={keyboardType}
          placeholder=""
          value={inputValue ? `${inputValue}` : ''}
          style={styles.input}
          returnKeyType={returnKeyType}
          onChangeText={text => {
            setInputValue(text);
            onChangeValue(text);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: colors.grey.grey3,
    marginBottom: 8,
  },
  input: {
    flex: 1,
    fontSize: 17,
    color: colors.black.black,
    height: '100%',
    paddingHorizontal: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grey.grey7,
    borderRadius: 4,
    height: 51,
  },
});

export default CountryPicker;
