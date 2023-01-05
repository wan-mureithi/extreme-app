import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IBank {
    id: string;
    slug: string;
    name: string;
    bank_type: string;
    nash_cash_id: number;
    default_currency_code?: string;
    logo_id: string;
    has_auto_connect: boolean;
    auto_connect_pending: boolean;
    description: string;
  }
  export interface IListResponse<T> {
    current_page: number;
    page_count: number;
    results: T[];
    row_count: number;
    page_size?: number;
    total_data_count: number;
    total_count?: number;
  }


export const banksApi = createApi({
    reducerPath: 'banksApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dev.treasury.nashglobal.co/api/' }),
    endpoints: (builder) => ({
      getBanks: builder.query<IListResponse<IBank>, void>({
        query: () => 'Banks/Public',
      })
    }),
  })

export const { useGetBanksQuery } = banksApi