import apiSlice from "../app/api/apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: "/api/v1/auth/signup",
        method: "POST",
        body: data,
      }),
    }),

    signIn: builder.mutation({
      query: (data) => ({
        url: "/api/v1/auth/signin",
        method: "POST",
        body: data,
      }),
    }),

    signOut: builder.mutation({
      query: () => ({
        url: "/api/v1/auth/signout",
        method: "POST",
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useSignOutMutation } =
  authApiSlice;
