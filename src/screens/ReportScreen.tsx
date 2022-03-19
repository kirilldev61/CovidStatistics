import React, {useCallback, useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types';
import {Container, Input, HeaderTitle, CountryPicker} from '../component';
import {useStore, updateCountryCase} from '../store';

import {useFetchCountries} from '../hooks';
import {colors} from '../utilities';
type PageProps = StackNavigationProp<RootStackParamList, 'Report'>;

const ReportScreen = () => {
  const navigation = useNavigation<PageProps>();
  const {countries} = useFetchCountries();
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [countryName, setCountryName] = useState<string | null>(null);

  const [confirmed, setConfirmed] = useState<number | null>(null);
  const [recovered, setRecovered] = useState<number | null>(null);
  const [death, setDeath] = useState<number | null>(null);

  const onSubmit = useCallback(() => {
    useStore.dispatch(
      updateCountryCase({
        Country: countryName ?? '',
        CountryCode: countryCode ?? '',
        NewConfirmed: confirmed ?? 0,
        NewRecovered: recovered ?? 0,
        NewDeaths: death ?? 0,
        Date: new Date().toISOString(),
      }),
    );
    navigation.goBack();
  }, [countryCode, countryName, confirmed, recovered, death, navigation]);

  const disabled =
    !countryCode || !countryName || !confirmed || !recovered || !death;

  return (
    <Container style={styles.container}>
      <View>
        <HeaderTitle
          title="Report"
          boldTitle="Case"
          style={styles.headerStyle}
        />
        <CountryPicker
          description="SELECT COUNTRY"
          countries={countries ?? []}
          code={countryCode}
          name={countryName}
          onChangeCountry={(code, name) => {
            setCountryCode(code);
            setCountryName(name);
          }}
        />
        <Input
          description="CONFIRMED"
          value={confirmed}
          keyboardType="number-pad"
          returnKeyType="next"
          onChangeValue={value => {
            if (!isNaN(Number(value))) {
              setConfirmed(Number(value));
            }
          }}
        />
        <Input
          description="RECOVERED"
          value={recovered}
          keyboardType="number-pad"
          returnKeyType="next"
          onChangeValue={value => {
            if (!isNaN(Number(value))) {
              setRecovered(Number(value));
            }
          }}
        />
        <Input
          description="DEATH"
          value={death}
          keyboardType="number-pad"
          returnKeyType="next"
          onChangeValue={value => {
            if (!isNaN(Number(value))) {
              setDeath(Number(value));
            }
          }}
        />
        <Button disabled={disabled} title="Submit" onPress={onSubmit} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  pickerStyle: {
    height: 50,
    width: '100%',
  },
  description: {
    fontSize: 16,
    color: colors.grey.grey3,
    marginBottom: 8,
  },
  countryPickerContainer: {
    height: 50,
    width: '100%',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grey.grey7,
    padding: 8,
    marginBottom: 16,
  },
  countryContent: {
    fontSize: 17,
    color: colors.grey.grey3,
    marginHorizontal: 15,
  },
  headerStyle: {
    marginBottom: 24,
  },
});

export default ReportScreen;
