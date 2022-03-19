export interface GlobalStatisticCase {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
}

export interface CountryCase {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
}

export interface UpdateCountryCase {
  Country: string;
  CountryCode: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Date: string;
}

export interface Country {
  Country: string;
  Slug: string;
  ISO2: string;
}

export type StoreState = {
  countryCases: CountryCase[];
};

export type SORT_KEY = 'TotalConfirmed' | 'TotalDeaths' | 'TotalRecovered';
export type ORDER_KEY = 'asc' | 'desc';
