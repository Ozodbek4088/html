import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:8000";
export const testApi = createApi({
  reducerPath: "testsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    tests: builder.query({
      query: () => "/tests",
    }),
    testItemDetails: builder.query({
      query: (testId) => `/tests/${testId}`,
    }),
    addTest: builder.mutation({
      query: (test) => ({
        url: "/tests",
        method: "POST",
        body: test,
      }),
    }),
    updateTest: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/tests/${id}`,
        method: "PUT",
        body: rest,
      }),
    }),
    deleteTest: builder.mutation({
      query: (id) => ({
        url: `/tests/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useTestsQuery,
  useAddTestMutation,
  useTestItemDetailsQuery,
  useUpdateTestMutation,
  useDeleteTestMutation,
} = testApi;
