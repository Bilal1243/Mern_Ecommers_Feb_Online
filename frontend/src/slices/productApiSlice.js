import { apiSlice } from "./apiSlice";

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/api/products",
        method: "POST",
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `/api/products/${productId}`,
        method: "DELETE",
      }),
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/api/products/${id}`,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ productId, data }) => ({
        url: `/api/products/${productId}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductByIdQuery,
  useUpdateProductMutation,
} = productApiSlice;
