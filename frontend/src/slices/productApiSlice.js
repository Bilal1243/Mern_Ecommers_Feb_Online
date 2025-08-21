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
    getAllProducts: builder.query({
      query: () => ({
        url: "/api/products/getAllProducts",
      }),
    }),
    getProducts: builder.query({
      query: ({ pageNumber, keyword } = {}) => ({
        url: "/api/products",
        params: { pageNumber, keyword },
      }),
    }),

    createProductReview: builder.mutation({
      query: (data) => ({
        url: `/api/products/${data.productId}/review`,
        method: "POST",
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
  useGetAllProductsQuery,
  useGetProductsQuery,
  useCreateProductReviewMutation,
} = productApiSlice;
