import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../apiConfig";

export const authApi = createApi({
  reducerPath: "auth",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 10,
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl + "/api/auth/",
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data: { email: string; password: string }) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useLoginMutation } = authApi;
