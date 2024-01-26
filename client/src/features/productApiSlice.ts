import apiSlice from "../app/api/apiSlice";
import { Product } from "../types/data.type";

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => "/products",
      transformResponse: (response: { metadata: { products: Product[] } }) =>
        response?.metadata.products,
      keepUnusedDataFor: 5,
      providesTags: ["Products"],
    }),

    getProduct: builder.query({
      query: (productId) => `/products/${productId}`,
      transformResponse: (response: { metadata: { product: Product } }) =>
        response.metadata.product,
      keepUnusedDataFor: 5,
      providesTags: ["Products"],
    }),

    addProduct: builder.mutation({
      query: (data) => ({
        url: `/products`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),

    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),

    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApiSlice;
