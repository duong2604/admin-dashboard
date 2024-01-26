import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dashboard.render.com//api/v1",
  }),
  tagTypes: ["Products", "Users"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
