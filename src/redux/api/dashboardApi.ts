/* eslint-disable no-mixed-spaces-and-tabs */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../apiConfig";

export const dashboardApi = createApi({
  reducerPath: "dashboard",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 10,
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl + "/api/",
  }),
  tagTypes: ["DashbaordStats", "DashbaordTransactions", "DashboardMetrics"],
  endpoints: (builder) => ({
    getDashboardMetrics: builder.query({
      query: () => "dashboard",
      providesTags: ["DashboardMetrics"],
    }),
    getDashboardStats: builder.query({
      query: ({ range }: { range?: string }) => ({
        url: "dashboard/stats",
        params: {
          range,
        },
      }),
      providesTags: ["DashbaordStats"],
    }),
    getDashboardTransaction: builder.query({
      query: ({ type }: { type?: string }) => ({
        url: "dashboard/transactions",
        params: {
          type,
        },
      }),
      providesTags: ["DashbaordTransactions"],
    }),
  }),
});

export const {
  useGetDashboardMetricsQuery,
  useGetDashboardStatsQuery,
  useGetDashboardTransactionQuery,
} = dashboardApi;
