import { createApi } from "@reduxjs/toolkit/query/react";
import { SignInRequest, SignInResponse } from "types/auth/signInType";
import customFetchBase from "data/middleware";

export const GeneralApi = createApi({
  baseQuery: customFetchBase,
  reducerPath: "GeneralApi",
  tagTypes: ["account", "whenFirstStep", "whenLastStep"],
  endpoints: (builder) => ({
    login: builder.mutation<SignInResponse, SignInRequest>({
      invalidatesTags: ["account"],
      query: (body) => ({
        url: "Users/login",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useLoginMutation } = GeneralApi;
