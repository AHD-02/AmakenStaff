import { createApi } from "@reduxjs/toolkit/query/react";
import { SignInRequest, SignInResponse } from "types/auth/signInType";
import customFetchBase from "data/middleware";

export const GeneralApi = createApi({
  baseQuery: customFetchBase,
  reducerPath: "GeneralApi",
  tagTypes: ["account"],
  endpoints: (builder) => ({
    login: builder.mutation<SignInResponse, SignInRequest>({
      invalidatesTags: ["account"],
      query: (body) => ({
        url: "admin/signIn",
        method: "POST",
        body: body,
      }),
    }),
    admins: builder.query<any, void>({
      query: () => ({
        url: "admin/searchAdmins",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useAdminsQuery } = GeneralApi;
