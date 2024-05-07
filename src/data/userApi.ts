import { createApi } from "@reduxjs/toolkit/query/react";
import { SignInRequest, SignInResponse } from "types/auth/signInType";
import customFetchBase from "data/middleware";
import { AdminRequestType } from "types/adminType";

export const GeneralApi = createApi({
  baseQuery: customFetchBase,
  reducerPath: "GeneralApi",
  tagTypes: ["account", "createAdmin"],
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
      providesTags: ["createAdmin"],
      query: () => ({
        url: "admin/searchAdmins",
        method: "GET",
      }),
    }),
    createAdmin: builder.mutation<void, AdminRequestType>({
      invalidatesTags: ["createAdmin"],
      query: (body) => ({
        url: "admin/create",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useLoginMutation, useAdminsQuery, useCreateAdminMutation } = GeneralApi;
