import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "data/middleware";
import { PrivatePlaceResponse } from "types/privatePlaceType";

export const PrivatePlaceApi = createApi({
  baseQuery: customFetchBase,
  reducerPath: "PrivatePlaceApi",
  tagTypes: ["privatePlace"],
  endpoints: (builder) => ({
    places: builder.query<Array<PrivatePlaceResponse>, void>({
      providesTags: ["privatePlace"],
      query: () => ({
        url: "admin/searchPrivatePlaces",
        method: "GET",
      }),
    }),
    placeById: builder.query<PrivatePlaceResponse, string>({
      providesTags: ["privatePlace"],
      query: (id) => ({
        url: `admin/getPrivatePlace?id=${id}`,
        method: "GET",
      }),
    }),
    approve: builder.mutation<any, string>({
      invalidatesTags: ["privatePlace"],
      query: (id) => ({
        url: `admin/ApprovePrivatePlace?newPlaceId=${id}`,
        method: "POST",
        body: {},
      }),
    }),
    reject: builder.mutation<any, { placeId: string; rejectionReason: string }>(
      {
        invalidatesTags: ["privatePlace"],
        query: (body) => ({
          url: `admin/rejectPrivatePlace`,
          method: "POST",
          body: body,
        }),
      }
    ),
  }),
});

export const {
  usePlacesQuery,
  useApproveMutation,
  useRejectMutation,
  usePlaceByIdQuery,
} = PrivatePlaceApi;
