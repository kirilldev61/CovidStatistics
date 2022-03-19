import numbro from 'numbro';
export * from './colors';

export const formatNumber = (num: number) => {
  return numbro(num).format({
    average: true,
    mantissa: 2,
  });
};
