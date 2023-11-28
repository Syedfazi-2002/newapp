import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const countryApi = createApi({
  reducerPath: 'countryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3/' }),
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: (name) => `/all`,
    }),
  }),
  
})

export const { useGetAllCountriesQuery } = countryApi