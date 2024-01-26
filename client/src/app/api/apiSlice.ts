import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  tagTypes: ["Products", "Users"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
