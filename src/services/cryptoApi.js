import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Crypto API Headers
const cryptoApiHeaders = {
  'x-rapidapi-key': '4fd700b206mshf1649220cd33d6cp1dbdfajsn436416b3f9ad',
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
};

// Base URL
const baseUrl = 'https://coinranking1.p.rapidapi.com';

// Make API Request
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// Crypto API Redux Logic
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // get cryptocurrencies
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    // get crypto details
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
    // get crypto history
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`),
    }),
  }),
});

// Export Crypto API
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
